+++
id = "KB-RAILS-GUIDELINES-V1"
title = "Ruby on Rails Development Guidelines"
context_type = "knowledge_base"
scope = "Ruby on Rails specific coding standards, best practices, conventions, and common patterns for framework-rails mode"
target_audience = ["framework-rails", "dev-ruby"]
granularity = "reference"
status = "active"
last_updated = "2025-05-03"
tags = ["kb", "ruby", "rails", "framework", "development", "coding-standards", "best-practices", "mvc", "activerecord", "convention-over-configuration", "security", "testing", "performance", "migrations", "routing", "actionview", "helpers", "forms", "activejob", "activestorage", "actiontext", "actioncable", "i18n", "activesupport", "debugging", "logging", "cli", "deployment", "engines", "plugins"]
template_schema_doc = ".ruru/templates/toml-md/15_knowledge_base.README.md"
relevance = "High: Core guidelines for Rails development"
+++

# Knowledge Base: Ruby on Rails Development Guidelines

This document outlines standard practices, conventions, and common patterns for developing applications with Ruby on Rails.

## Convention Over Configuration

*   **Embrace Rails Conventions:** Deeply understand and leverage the framework's defaults for naming (models: singular `CamelCase`, controllers: plural `CamelCaseController`, tables: plural `snake_case`, files: `snake_case`), directory structure (`app/models`, `app/controllers`, `app/views`, `config/routes.rb`, etc.), and RESTful routing. This significantly reduces boilerplate code and improves maintainability across projects.
    *   Example: A `Book` model (`app/models/book.rb`) maps to a `books` table and is managed by `BooksController` (`app/controllers/books_controller.rb`).
*   **Justify Deviations:** Only deviate from established conventions when there is a strong, well-documented technical reason. Clearly explain the rationale in code comments or project documentation.

## Style Guide & Linting

*   **Adhere to Standard Ruby/Rails:** Follow the conventions enforced by `standard` and `standard-rails`. These gems provide a consistent, non-configurable ruleset based on community best practices and RuboCop.
*   **Integration with RuboCop Tooling:** To leverage the `standard-rails` ruleset within the standard RuboCop command-line interface (e.g., `rubocop -A`), create or modify your `.rubocop.yml` file to inherit the Standard configuration using the following structure. This allows using familiar RuboCop commands while enforcing the Standard rules.

    ```yaml
    inherit_mode:
      merge:
        - Exclude
    require:
      - standard
    plugins:
      - standard-performance
      - standard-rails
    inherit_gem:
      standard: config/base.yml
      standard-performance: config/base.yml
      standard-rails: config/base.yml
    AllCops:
      SuggestExtensions: false
      NewCops: enable
    ```
## Fat Models, Skinny Controllers

*   **Controller Responsibilities:** Keep controllers focused on:
    *   Handling the request/response cycle (parsing `params`, setting headers).
    *   Authentication and authorization checks (often via filters like `before_action`).
    *   Loading or finding necessary records (usually via the model, e.g., `@product = Product.find(params[:id])`).
    *   Permitting parameters (Strong Parameters).
    *   Delegating business logic to models or service objects.
    *   Rendering the appropriate view (`render :edit`), JSON (`render json: @product`), or redirect (`redirect_to @product`).
*   **Model Responsibilities:** Place core business logic, including:
    *   Data validations (`validates :name, presence: true`).
    *   Associations (`has_many :books`, `belongs_to :author`).
    *   Callbacks (`before_save`, `after_commit`, etc. - use judiciously).
    *   Scopes (`scope :published, -> { where(published: true) }`) for common queries.
    *   Instance and class methods containing business rules.
    *   Enums (`enum status: [:active, :archived]`).
*   **Service Objects/Concerns:** For complex business logic that doesn't fit neatly into a single model or involves multiple models, consider extracting it into:
    *   **Service Objects:** Plain Old Ruby Objects (POROs) dedicated to performing a specific business action (e.g., `UserRegistrationService`, `OrderProcessor`).
    *   **Concerns:** Modules (`ActiveSupport::Concern`) included into models or controllers to share reusable behavior (e.g., `Product::Notifications`).

## Security

*   **Use Strong Parameters:** **Always** whitelist permitted parameters in controllers using `require` and `permit` (or `expect`) to prevent mass assignment vulnerabilities. Never trust user input directly.
    ```ruby
    # In your controller
    def product_params
      # Using require/permit
      params.require(:product).permit(:name, :description, :featured_image, :inventory_count)
      # Using expect (Rails 7.1+) - raises if structure doesn't match
      # params.expect(product: [ :name, :description, :featured_image, :inventory_count ])
    end

    # Permitting nested attributes (e.g., for accepts_nested_attributes_for)
    def person_params
      params.require(:person).permit(:name, addresses_attributes: [:id, :kind, :street, :_destroy])
      # Or with expect:
      # params.expect(person: [ :name, addresses_attributes: [[ :id, :kind, :street, :_destroy ]] ])
    end
    ```
*   **Protect against SQL Injection:** Use ActiveRecord query methods (`where`, `find_by`, `order`, etc.) which automatically sanitize inputs. **Never** use string interpolation or concatenation to build SQL query fragments with user input (e.g., `User.where("name = '#{params[:name]}'")` is **DANGEROUS**). Use placeholder conditions: `User.where("name = ?", params[:name])` or hash conditions: `User.where(name: params[:name])`. Escape wildcards in `LIKE` clauses: `Book.where("title LIKE ?", Book.sanitize_sql_like(params[:title]) + "%")`.
*   **Protect against Cross-Site Scripting (XSS):** Rails automatically escapes HTML entities in views (`.erb`, `.haml`, `.slim`) by default. Be extremely cautious when using `raw()` or `html_safe` methods, ensuring the content being marked as safe is truly trustworthy or properly sanitized beforehand using `sanitize()`. Configure Content Security Policy (CSP) headers (`config/initializers/content_security_policy.rb`) for an additional layer of defense.
*   **Protect against Cross-Site Request Forgery (CSRF):** Ensure `protect_from_forgery with: :exception` (or `:null_session` for APIs) is present in your `ApplicationController`. This relies on the CSRF token included automatically in Rails forms (`form_with`, `form_tag`) via `csrf_meta_tags` in your layout. Ensure non-GET requests from JavaScript include the CSRF token (e.g., fetched from meta tags: `document.head.querySelector("meta[name=csrf-token]")?.content`). Consider enabling per-form CSRF tokens (`config.action_controller.per_form_csrf_tokens = true`) for enhanced security. Handle `ActionController::InvalidAuthenticityToken` exceptions gracefully.
*   **Authentication & Authorization:** Use established gems like Devise or Rodauth for authentication, or leverage Rails' built-in `has_secure_password` and the authentication generator (`bin/rails generate authentication`). Use gems like Pundit or CanCanCan for authorization logic. Implement session management securely (e.g., `reset_session` on login/logout to prevent session fixation). Use `generates_token_for` for secure, time-limited tokens (e.g., password resets, unsubscribes).
*   **Redirects:** Avoid open redirects by validating redirect targets. Don't pass user input directly to `redirect_to` without validation (e.g., `redirect_to params[:referer]` is unsafe). Use `redirect_back(fallback_location: root_path)`. Filter sensitive redirect URLs from logs (`config.filter_redirect`).
*   **File Handling:** Sanitize filenames during uploads to prevent path traversal or command injection. Validate file types and sizes. Use secure methods for serving files, checking permissions and paths (e.g., `send_file` with path validation).
*   **Command Injection:** Avoid using `system()` or `Kernel#open` with unvalidated user input. Use multi-argument versions of `system` or safer alternatives like `File.open`.
*   **Credentials Management:** Use `Rails.application.credentials` (via `bin/rails credentials:edit`) for managing sensitive API keys and secrets. Access via `Rails.application.credentials.dig(:service, :api_key)`.
*   **Host Authorization:** Configure allowed hosts (`config.hosts`) in production environments to prevent DNS rebinding attacks.
*   **Regular Expressions:** Use `\A` and `\z` for start/end of string anchors in regex validations, not `^` and `$`. Consider `Regexp.timeout` (Ruby 3.2+) to prevent Regexp Denial-of-Service (ReDoS).
*   **Headers:** Configure security headers like `Content-Security-Policy`, `Strict-Transport-Security` (`config.force_ssl = true`), `Permissions-Policy`, and CORS (`rack-cors` gem) appropriately.

## Testing

*   **Write Comprehensive Tests:** Use Rails' built-in testing framework (Minitest) or alternatives like RSpec. Aim for good coverage across:
    *   **Models:** Test validations, associations, scopes, and business logic methods. Use `assert` methods (`assert`, `assert_not`, `assert_equal`, `assert_raises`, `assert_difference`, etc.).
        ```ruby
        # test/models/article_test.rb
        require "test_helper"

        class ArticleTest < ActiveSupport::TestCase
          test "should not save article without title" do
            article = Article.new
            assert_not article.save, "Saved the article without a title" # Example with custom message
          end

          test "should save article with title" do
            article = Article.new(title: "Valid Title")
            assert article.save
          end
        end
        ```
    *   **Controllers/Requests (Integration Tests):** Test controller actions, parameter handling, responses (status codes, templates rendered, redirects), flash messages, and authentication/authorization. Use `get`, `post`, `patch`, `put`, `delete`. Test AJAX requests with `xhr: true`. Test JSON APIs with `as: :json`. Use `assert_dom` or pattern matching for HTML/JSON responses.
        ```ruby
        # test/controllers/articles_controller_test.rb
        require "test_helper"

        class ArticlesControllerTest < ActionDispatch::IntegrationTest
          setup do
            @article = articles(:one) # Assumes fixture exists
          end

          test "should get index" do
            get articles_url
            assert_response :success
          end

          test "should create article" do
            assert_difference("Article.count") do
              post articles_url, params: { article: { title: "Hello Rails", body: "Rails is awesome!" } }
            end
            assert_redirected_to article_path(Article.last)
            assert_equal "Article was successfully created.", flash[:notice]
          end

          test "should show article" do
            get article_url(@article)
            assert_response :success
            assert_dom "h1", "Article Title" # Example using assert_dom
          end

          test "should update article" do
             patch article_url(@article), params: { article: { title: "updated" } }
             assert_redirected_to article_path(@article)
             @article.reload
             assert_equal "updated", @article.title
          end

          test "should destroy article" do
            assert_difference("Article.count", -1) do
              delete article_url(@article)
            end
            assert_redirected_to articles_path
          end
        end
        ```
    *   **System/Feature:** Test user workflows and interactions across multiple components using Capybara. Use `visit`, `click_on`, `fill_in`, `assert_text`, `assert_selector`, etc. Configure drivers (Selenium, Cuprite) and screen sizes as needed.
        ```ruby
        # test/system/articles_test.rb
        require "application_system_test_case"

        class ArticlesTest < ApplicationSystemTestCase
          test "creating an Article" do
            visit articles_path
            click_on "New Article"

            fill_in "Title", with: "Creating an Article"
            fill_in "Body", with: "Created this article successfully!"

            click_on "Create Article"

            assert_text "Creating an Article"
          end
        end
        ```
    *   **Helpers:** Test helper methods using `ActionView::TestCase`.
    *   **Mailers:** Test email content, headers, and delivery using `ActionMailer::TestCase` and `assert_emails`.
    *   **Jobs:** Test job enqueuing and execution using `ActiveJob::TestCase` and `assert_enqueued_jobs`, `perform_enqueued_jobs`.
    *   **Channels:** Test Action Cable channels using `ActionCable::Channel::TestCase` and `ActionCable::Connection::TestCase`.
*   **Use Factories:** Employ factories (e.g., FactoryBot) for creating test data efficiently and maintainably instead of relying heavily on fixtures, especially for complex object graphs. Fixtures (`test/fixtures/*.yml`) are suitable for simple, stable data.
*   **Keep Tests Fast:** Optimize test suites by minimizing unnecessary database interactions and external dependencies where possible. Use transactional tests (default) where appropriate. Disable transactions (`self.use_transactional_tests = false`) only when necessary (e.g., testing multi-threaded code) and handle cleanup manually.
*   **Running Tests:** Use `bin/rails test` to run tests. Run specific files, directories, line numbers, or test names (`bin/rails test test/models/user_test.rb:27`, `bin/rails test test/controllers`, `bin/rails test -n test_the_truth`). Use `PARALLEL_WORKERS` to control parallel execution. Use `-b` for full backtrace on failure.

## Performance

*   **Avoid N+1 Queries:** Be vigilant about N+1 query problems, especially in views or serializers that iterate over collections and access associated records. Use `includes`, `preload`, or `eager_load` in your controller or scopes to eager-load necessary associations. Tools like the `bullet` gem can help detect N+1 queries during development.
    ```ruby
    # Controller (N+1 potential)
    # @posts = Post.limit(10)
    # View
    # <% @posts.each do |post| %>
    #   <%= post.author.name %> <%# Causes N+1 %>
    # <% end %>

    # Controller (Fixed with includes)
    @posts = Post.includes(:author).limit(10)
    # View (No N+1)
    # <% @posts.each do |post| %>
    #   <%= post.author.name %>
    # <% end %>
    ```
*   **Use Database Indexes:** Add database indexes (`add_index` in migrations) to columns frequently used in `WHERE` clauses, `ORDER BY` clauses, or `JOIN` conditions. Analyze query performance using `EXPLAIN` (e.g., `User.where(active: true).explain`). Index foreign keys. Add unique indexes for uniqueness constraints.
*   **Background Job Processing:** Offload long-running tasks (email sending, image processing, API calls, complex calculations) to background job frameworks like Sidekiq, Delayed Job, or Good Job using Active Job (`MyJob.perform_later(args)`). This prevents blocking web requests and improves responsiveness.
*   **Caching:** Implement caching strategies where appropriate:
    *   **Fragment Caching:** Cache parts of views (`<% cache cache_key do %> ... <% end %>`). Use model instances or collections for automatic key generation and expiration (`touch: true` on associations helps). Use `cache_if`/`cache_unless` for conditional caching.
    *   **Low-Level Caching:** Cache results of expensive queries or computations (`Rails.cache.fetch(cache_key, expires_in: 12.hours) { ... }`). Avoid caching Active Record instances directly; cache IDs or primitive data. Configure cache stores (`:memory_store`, `:file_store`, `:redis_cache_store`, `:mem_cache_store`, `:solid_cache_store`).
    *   **HTTP Caching:** Use `stale?(last_modified:, etag:)` or `fresh_when(last_modified:, etag:, public: true)` in controllers with ETags and Last-Modified headers to allow browsers/proxies to cache responses, reducing server load.
*   **Batch Processing:** For operations on large numbers of records, use `find_each` (processes records one by one, fetching in batches) or `find_in_batches` (yields arrays of records) instead of `all.each` to avoid loading everything into memory. Specify `:batch_size`, `:start`, `:finish`.
    ```ruby
    # Efficient
    Customer.find_each(batch_size: 500, start: 1000) do |customer|
      NewsMailer.weekly(customer).deliver_now
    end

    # Inefficient for large tables
    # Customer.all.each do |customer|
    #   NewsMailer.weekly(customer).deliver_now
    # end
    ```
*   **Database Query Optimization:**
    *   Use `pluck` to retrieve only specific columns when full model objects aren't needed.
    *   Use `select` to limit columns fetched.
    *   Use database calculation methods like `count`, `sum`, `average`, `minimum`, `maximum`.
    *   Understand `joins` vs `includes` vs `left_outer_joins`. `joins` uses `INNER JOIN`, `includes` uses `LEFT OUTER JOIN` (usually) or separate queries, `left_outer_joins` forces `LEFT OUTER JOIN`. Use `references` when using string conditions with `includes`.
    *   Use `distinct` to remove duplicate rows.
    *   Use `update_all` and `delete_all` for bulk updates/deletes that bypass callbacks and validations (use with caution).
    *   Use `none` to return an empty, chainable relation.
    *   Use `unscope`, `rewhere`, `reorder`, `regroup` to modify existing relation clauses.
*   **Locking:**
    *   **Optimistic Locking:** Use the `lock_version` column to prevent concurrent updates overwriting each other (`ActiveRecord::StaleObjectError`).
    *   **Pessimistic Locking:** Use `lock` or `with_lock` within a transaction to acquire database-level locks (`SELECT ... FOR UPDATE`) when critical updates require exclusive access.

## Migrations

*   **Generation:** Use `bin/rails generate migration AddDetailsToProducts part_number:string price:decimal` or `bin/rails g migration CreateJoinTableUserProduct user product`. Generate blank migrations with `bin/rails g migration MyMigrationName`.
*   **DSL:** Use the migration DSL methods (`create_table`, `add_column`, `remove_column`, `change_column`, `change_table`, `add_index`, `add_reference`/`add_belongs_to`, `remove_reference`, `add_foreign_key`, `remove_foreign_key`, `create_join_table`, etc.) for database-agnostic changes. Specify types, constraints (`null: false`, `default: 0`), indexes (`index: true`, `index: { unique: true }`), foreign keys (`foreign_key: true`), precision/scale for decimals, comments, etc.
    ```ruby
    class CreateProducts < ActiveRecord::Migration[8.1]
      def change
        create_table :products do |t|
          t.string :name, null: false, index: true
          t.text :description
          t.references :category, foreign_key: true, index: false # Example: Index FK separately if needed
          t.decimal :price, precision: 8, scale: 2, default: 0.0
          t.integer :stock_quantity, comment: "Current stock"
          t.timestamps # Adds created_at and updated_at
        end
        # Add index separately if complex options needed
        add_index :products, :category_id
      end
    end
    ```
*   **Reversibility:** Prefer the `change` method for reversible migrations. Use `up`/`down` or `reversible do |dir| dir.up { ... }; dir.down { ... } end` for non-reversible operations (e.g., complex data changes, `execute` raw SQL). Raise `ActiveRecord::IrreversibleMigration` in `down` if reversal is impossible. Use `revert` inside `change` to reverse previous migrations or blocks.
*   **Raw SQL:** Use `execute("SQL command")` for database-specific features or complex operations not covered by the DSL. Ensure reversibility if possible.
*   **Data Migrations:** Avoid complex data manipulation directly in schema migrations. Use Rake tasks (`task update_data: :environment do ... end`), data migration gems, or separate scripts. `db/seeds.rb` is for initial setup data (`bin/rails db:seed`).
*   **Running Migrations:** Use `bin/rails db:migrate`, `db:rollback [STEP=n]`, `db:migrate:up VERSION=...`, `db:migrate:down VERSION=...`, `db:migrate:status`, `db:schema:load`, `db:structure:load` (for SQL schema format), `db:seed`, `db:reset`. Run for specific environments (`RAILS_ENV=test bin/rails db:migrate`).
*   **Foreign Keys & Indexes:** Always add foreign key constraints (`foreign_key: true`) for `belongs_to`/`references`. Index foreign keys and columns used in frequent queries. Use unique indexes for uniqueness constraints.
*   **Database Specifics:** Leverage database-specific types (e.g., PostgreSQL's `jsonb`, `hstore`, `array`, `enum`, `interval`, `uuid`, network types) and features (e.g., exclusion constraints) via migrations when appropriate. Enable extensions (`enable_extension "pgcrypto"`).
*   **Transactions:** Migrations run within a transaction by default. Use `disable_ddl_transaction!` for operations that cannot run inside a transaction (e.g., adding enum values concurrently).

## Routing (`config/routes.rb`)

*   **RESTful Routes:** Prefer `resources :items` and `resource :profile` for standard CRUD operations. Use `:only` or `:except` to limit generated routes.
*   **Custom Routes:** Use `get`, `post`, `patch`, `put`, `delete`, or `match` for non-standard routes. `match '/path', to: 'controller#action', via: [:get, :post]`.
*   **Root Route:** Define the application root using `root "controller#action"`.
*   **Nesting:** Use nested `resources` for parent-child relationships (e.g., `resources :magazines do resources :ads end`). Consider shallow nesting (`shallow: true` or `shallow do ... end`) to keep URLs concise for member actions (`/comments/:id` instead of `/articles/:article_id/comments/:id`).
*   **Member/Collection Routes:** Add routes acting on individual members (`on: :member`) or the collection (`on: :collection`).
    ```ruby
    resources :photos do
      get "preview", on: :member   # /photos/1/preview
      get "search", on: :collection # /photos/search
    end
    ```
*   **Namespaces & Scope:** Organize routes with `namespace :admin do ... end` (prefixes path `/admin`, helper `admin_`, and controller `Admin::`) or `scope module: 'admin', path: '/a', as: 'admin' do ... end` (more flexible control over prefixing).
*   **Concerns:** Define reusable route snippets with `concern :commentable do resources :comments end` and apply them with `concerns :commentable`.
*   **Constraints:** Restrict routes based on request parameters (`id: /[A-Z]\d{5}/`), subdomain, IP, or custom logic using `constraints: { ... }` or lambda/class constraints.
*   **Redirects:** Use `redirect('/new_path', status: 301)` for permanent redirects. Can use dynamic segments: `redirect("/articles/%{name}")`.
*   **Helpers:** Use path/URL helpers (`articles_path`, `edit_article_url(@article)`) generated by Rails in controllers and views. Access them in the console via `app.` or `helper.`.
*   **Inspection:** Use `bin/rails routes` to list routes. Filter with `-c ControllerName` or `-g helper_prefix`. Use `--expanded` for detailed view. Use `--unused` to find potentially unneeded routes.
*   **Overriding Defaults:** Use `path_names: { new: 'make' }`, `as: 'images'`, `param: :identifier`, `controller: 'images'` to customize paths, helpers, parameter names, and target controllers.
*   **Direct/Resolve:** Use `direct(:homepage) { "..." }` for custom named helpers and `resolve("Basket") { [:basket] }` for customizing polymorphic routes.

## Active Record (Details)

*   **Model Definition:** Inherit from `ApplicationRecord`. Rails infers attributes from the database schema. Override conventions like `self.table_name` or `self.primary_key` if needed.
    ```ruby
    class Book < ApplicationRecord
      # self.table_name = "legacy_books" # Example override
      # self.primary_key = "isbn"       # Example override
    end
    ```
*   **CRUD Operations:**
    *   **Create:** `Model.new(attrs)`, `model.save`, `Model.create(attrs)`, `Model.create!(attrs)` (raises on validation error). Use block form `Model.new { |m| ... }`. Use association methods: `author.books.create(...)`, `author.books.build(...)`.
    *   **Read:** `Model.find(id)`, `Model.find_by(attr: value)`, `Model.find_by!(attr: value)`, `Model.first`, `Model.last`, `Model.take`. Use `where` for conditions. Access associations: `book.author`, `author.books`.
    *   **Update:** `model.update(attrs)`, `model.update!(attrs)`, `Model.update_all(updates, conditions)`. Assign attributes and `save`.
    *   **Delete:** `model.destroy` (runs callbacks), `Model.destroy_by(conditions)`, `Model.destroy_all` (runs callbacks), `model.delete` (skips callbacks), `Model.delete_by(conditions)`, `Model.delete_all` (skips callbacks). Use association methods: `author.books.delete(...)`, `author.books.destroy(...)`.
*   **Validations:**
    *   Use built-in helpers: `presence`, `uniqueness` (`scope:`, `case_sensitive:`, `conditions:`), `length` (`minimum:`, `maximum:`, `in:`, `is:`), `format` (`with:`), `inclusion` (`in:`), `exclusion` (`in:`), `numericality` (`only_integer:`, `greater_than:`), `comparison`, `acceptance`, `confirmation`. Validate associated objects with `validates_associated`. Validate absence with `absence`.
    *   Options: `message`, `on: [:create, :update]` (or custom contexts), `if: :method_name`, `unless: -> { condition }`, `allow_nil`, `allow_blank`, `strict: true` (or custom exception).
    *   Custom validators: Inherit `ActiveModel::Validator` or `ActiveModel::EachValidator`. Use `validates_with` or `validates_each`. Add errors with `record.errors.add(:attribute, :error_type, message: "...")`.
    *   Error handling: `model.valid?`, `model.invalid?`, `model.errors`, `errors.full_messages`, `errors[:attribute]`, `errors.where(:attr)`, `errors.add(:base, "message")`. Customize messages via I18n or `:message` option.
*   **Associations:**
    *   Types: `belongs_to`, `has_one`, `has_many`, `has_one :through`, `has_many :through`, `has_and_belongs_to_many` (HABTM).
    *   Options: `class_name`, `foreign_key`, `primary_key` (for non-standard keys), `dependent: :destroy/:nullify/:delete_all/:restrict_with_error/:restrict_with_exception`, `counter_cache`, `touch`, `optional: true` (for `belongs_to`), `inverse_of` (for bi-directional consistency), `scope` (lambda `-> { where(...) }`), `autosave`, `validate`, `readonly`, `select`, `group`, `limit`. Use `source` and `source_type` for `:through` associations involving polymorphism. Use `-> { distinct }` for unique results through associations.
    *   Polymorphic: `belongs_to :imageable, polymorphic: true`, `has_many :pictures, as: :imageable`. Requires `_id` and `_type` columns.
    *   Self-Joins: `has_many :subordinates, class_name: "Employee", foreign_key: "manager_id"`.
    *   Querying: `author.books`, `book.author`, `author.books.create(...)`, `author.books.build(...)`, `author.book_ids`, `author.books.count`, `author.books.where(...)`, `author.books.find(...)`. Check presence: `author.books.exists?`, `author.books.any?`, `author.books.empty?`. Reload cache: `author.books.reload`.
    *   Counter Cache: Add `_count` column (integer, default 0, not null), use `counter_cache: true` (or custom name) on `belongs_to`. Reset with `Model.reset_counters(id, :association)`.
    *   Touch: Use `touch: true` on `belongs_to` to update parent's `updated_at` when child is saved/destroyed. Can specify attribute: `touch: :books_updated_at`.
*   **Callbacks:**
    *   Lifecycle: `after_initialize`, `after_find`, `before_validation`, `after_validation`, `before_save`, `around_save`, `after_save`, `before_create`, `around_create`, `after_create`, `before_update`, `around_update`, `after_update`, `before_destroy`, `around_destroy`, `after_destroy`, `after_commit`/`after_rollback` (on create/update/destroy), `after_touch`. Association callbacks: `before_add`, `after_add`, `before_remove`, `after_remove`.
    *   Registration: Use macro style (`before_save :method_name`), pass block (`after_create { ... }`), or use callback object (`after_commit CallbackClass.new`).
    *   Conditional: `:if`, `:unless`. Can use symbols, procs, or arrays.
    *   Halting: `throw :abort` in `before_*` callbacks (rolls back transaction).
    *   Transactional: `after_commit`, `after_rollback`. Use `on: [:create, :update]` to specify events. `after_create_commit`, `after_update_commit`, `after_destroy_commit`, `after_save_commit` are aliases. Be aware of execution order and potential issues with exceptions. Use `ActiveRecord.after_all_transactions_commit` for actions after *all* nesting levels commit. Use `ActiveRecord::Transaction.after_commit` for per-transaction hooks.
    *   Skipping: `update_columns`, `delete_all`, `touch` (without args) skip callbacks.
*   **Scopes:** Define reusable query chains using `scope :published, -> { where(published: true) }`. Chain scopes: `Article.published.recent`. Use `default_scope` cautiously. Override scopes with `unscope`, `rewhere`, `reorder`. Pass arguments to scopes: `scope :created_before, ->(time) { where(created_at: ...time) }`.
*   **Enums:** Define enums for attributes: `enum status: { draft: 0, published: 1, archived: 2 }`. Provides helper methods (`article.published?`, `article.published!`, `Article.published`).
*   **Attribute API:** Define typed attributes, defaults, and serialization using `attribute :price_in_cents, :integer, default: 0`.
*   **Dirty Tracking:** Track attribute changes: `model.changed?`, `model.changes`, `model.attribute_changed?(:attr)`, `model.attribute_was(:attr)`, `model.saved_change_to_attribute?(:attr)`.
*   **Secure Tokens:** Use `has_secure_token` or `generates_token_for` for generating unique tokens.
*   **Encryption:** Use `encrypts :attribute_name, deterministic: true` for attribute-level encryption. Configure keys in credentials. Deterministic allows querying. Can configure `compressor`, `downcase`, `ignore_case`, `previous` schemes.
*   **Normalization:** Use `normalizes :email, with: -> email { email.strip.downcase }` to clean up attribute values before validation/saving.
*   **Single Table Inheritance (STI):** Store different model types in one table using a `type` column. Define base class and subclasses inheriting from it.
*   **Delegated Types:** More flexible alternative to STI using polymorphic associations (`delegated_type :entryable, types: %w[ Message Comment ]`). Requires an `Entryable` concern.
*   **Composite Primary Keys:** Define `self.primary_key = [:key1, :key2]`. Query using array values: `Model.find([val1, val2])`, `Model.where(Model.primary_key => [[v1a, v1b], [v2a, v2b]])`. Define associations with `foreign_key: [:fk1, :fk2]`.

## Action Controller

*   **Basics:** Inherit from `ApplicationController`. Actions are public methods. Parse `params` hash (query string, form data, URL segments, JSON body). Render views implicitly or explicitly (`render :edit`, `render json: {...}`, `render status: :unprocessable_entity`). Redirect with `redirect_to path_or_url`, `redirect_back`. Send header-only responses with `head :ok`.
*   **Strong Parameters:** Use `params.require(:model).permit(:attr1, nested: [:attr2])` or `params.expect(...)`.
*   **Filters (Callbacks):** Use `before_action`, `after_action`, `around_action`. Apply conditionally with `:only`, `:except`. Halt execution in `before_action` by rendering or redirecting.
    ```ruby
    class ApplicationController < ActionController::Base
      before_action :require_login
      around_action :measure_execution_time

      private
        def require_login
          unless logged_in?
            flash[:error] = "You must be logged in"
            redirect_to login_url # Halts
          end
        end

        def measure_execution_time
          start = Time.now; yield; duration = Time.now - start
          Rails.logger.info "#{controller_name}##{action_name} completed in #{duration.round(2)}s"
        end
    end
    ```
*   **Session:** Store simple data in `session[:key] = value`. Configure store in `config/initializers/session_store.rb` (`:cookie_store`, `:cache_store`, etc.). Use `reset_session` to prevent fixation.
*   **Flash:** Temporary messages for the *next* request: `flash[:notice] = "Success"`. Use `flash.now[:alert]` for messages displayed in the *current* request's render. Display in layout: `<% flash.each do |key, value| %>...<% end %>`. Use `flash.keep` to persist flash for another request.
*   **Cookies:** Access via `cookies[:key]`. Set expiration: `cookies[:key] = { value: "...", expires: 1.hour.from_now }`. Use `cookies.permanent` for long expiry (20 years). Use `cookies.signed` or `cookies.encrypted` for tamper-proof or encrypted storage. Configure `SameSite` protection.
*   **HTTP Caching:** Use `stale?(last_modified:, etag:)` or `fresh_when(last_modified:, etag:, public: true)` to leverage browser/proxy caching via `Last-Modified` and `ETag` headers. Rails handles sending `304 Not Modified` if applicable. Use `http_cache_forever` for permanent caching.
*   **Authentication:** Implement via filters, `has_secure_password`, or gems. Use `http_basic_authenticate_with` or `authenticate_or_request_with_http_token` for basic/token auth.
*   **Exception Handling:** Use `rescue_from ExceptionClass, with: :method_name` to handle specific exceptions globally or per-controller.
*   **API Controllers:** Inherit from `ActionController::API` for a leaner stack without view-related modules. Manually include needed modules (e.g., `ActionController::Caching`). Configure `debug_exception_response_format = :api`.
*   **Streaming:** Use `ActionController::Live` for streaming responses (Server-Sent Events).
*   **Parameter Filtering:** Configure `config.filter_parameters` to prevent sensitive data (passwords, credit cards) from appearing in logs.

## Action View & Helpers

*   **ERB:** Use `<% ... %>` for execution, `<%= ... %>` for output. Use `<%# ... %>` for comments.
*   **Layouts:** Define structure in `app/views/layouts/application.html.erb`. Use `yield` for main content. Use `content_for(:key)` and `yield(:key)` for specific sections (e.g., `<title>`, `<script>`). Nested layouts are possible via `render template: "layouts/..."`. Layouts can be specified per controller or action (`layout "admin"`).
*   **Partials:** Extract reusable view snippets into partials (`_partial_name.html.erb`). Render with `render "partial_name"`, `render partial: "partial_name"`, `render object`, `render collection`. Pass data via `locals: { key: value }`. Use `spacer_template` for collections. Use magic comments for strict locals (`<%# locals: (message:, count: 0) %>`). Access counter via `partial_name_counter`.
*   **Built-in Helpers:** Leverage Rails helpers:
    *   **Linking:** `link_to "Text", path_or_url, data: { turbo_method: :delete, turbo_confirm: "Sure?" }`, `button_to "Action", path, method: :post, form: { data: { turbo_confirm: "Sure?" } }`, `mail_to`.
    *   **Assets:** `image_tag`, `video_tag`, `audio_tag`, `stylesheet_link_tag`, `javascript_include_tag`, `asset_path`. Use `preload_link_tag`.
    *   **Forms:** See Forms section below.
    *   **Number Formatting:** `number_to_currency`, `number_with_precision`, `number_to_human_size`, `number_to_percentage`, `number_with_delimiter`.
    *   **Date/Time Formatting:** `time_ago_in_words`, `distance_of_time_in_words`. Use `l()` for localized formatting.
    *   **Text Formatting:** `simple_format` (preserves line breaks), `truncate`, `highlight`, `excerpt`, `word_wrap`, `pluralize`.
    *   **Sanitization:** `sanitize` (allows safe HTML), `strip_tags` (removes all tags), `sanitize_css`. Configure allowed tags/attributes globally or per call.
    *   **Debugging:** `debug` (YAML output).
    *   **Tags:** `tag.div`, `content_tag(:p, "Hello")`, `tag.br`, `tag.hr`. Use `token_list` (`class_names`) for building CSS classes conditionally.
    *   **CSRF/CSP:** `csrf_meta_tags`, `csp_meta_tag`.
    *   **Other:** `capture` (capture block output to variable), `current_page?`, `benchmark`.
*   **Custom Helpers:** Define custom presentation logic in `app/helpers/*.rb`. Keep helpers focused on view logic.

## Forms

*   **Form Builders:** Use `form_with(model: @post, url: path, method: :patch, local: true/false)` (preferred). `local: true` forces standard form submission, `false` (default) enables Turbo/UJS AJAX submissions. Can be used without a model (`form_with url: "/search"`).
    ```erb
    <%= form_with model: @product, local: true do |form| %>
      <% if form.object.errors.any? %>
        <div id="error_explanation">
          <h2><%= pluralize(form.object.errors.count, "error") %> prohibited this product from being saved:</h2>
          <ul>
            <% form.object.errors.full_messages.each do |message| %>
              <li><%= message %></li>
            <% end %>
          </ul>
        </div>
      <% end %>

      <div class="field">
        <%= form.label :name %>
        <%= form.text_field :name %>
      </div>
      <%# ... other fields ... %>
      <div class="actions">
        <%= form.submit %>
      </div>
    <% end %>
    ```
*   **Input Helpers:** Use form builder methods: `text_field`, `password_field`, `text_area`, `check_box`, `radio_button`, `select`, `collection_select`, `collection_radio_buttons`, `collection_checkboxes`, `date_select`, `time_zone_select`, `file_field`, `number_field`, `hidden_field`, `email_field`, `telephone_field`, `url_field`, `search_field`, `color_field`, `range_field`. Use tag helpers (`text_field_tag`) outside builders.
*   **Nested Forms:** Use `fields_for :association_name` and `accepts_nested_attributes_for :association_name, allow_destroy: true, reject_if: :all_blank` in the model. Permit nested attributes in the controller: `params.require(:model).permit(..., association_attributes: [:id, :attr1, :_destroy])`. Use `_destroy` checkbox for removal. Build empty associated objects in `new` action if needed (`2.times { @person.addresses.build }`).
*   **File Uploads:** Use `form.file_field :attachment`. Ensure form has `multipart: true` if not using `form_with`. See Active Storage section.
*   **Custom Builders:** Create custom form builders inheriting `ActionView::Helpers::FormBuilder` to encapsulate custom field rendering logic. Use `builder:` option in `form_with`.

## Active Job

*   **Purpose:** Run tasks in the background (emails, API calls, computations).
*   **Generation:** `bin/rails generate job MyJob --queue=urgent --parent=MyBaseJob`.
*   **Definition:** Inherit from `ApplicationJob` (or custom base), define `perform(*args)`.
*   **Enqueuing:** `MyJob.perform_later(arg1, arg2)`, `MyJob.set(wait: 5.minutes, queue: :low, priority: 10).perform_later(...)`. Use `perform_now` for immediate synchronous execution (mainly for testing). Use `perform_all_later` for bulk enqueuing.
*   **Backends:** Configure adapter in `config/application.rb` or environment files (`config.active_job.queue_adapter = :sidekiq`). Common adapters: Sidekiq, Delayed Job, Good Job, Solid Queue, Resque.
*   **Queues:** Assign jobs to queues (`queue_as :low_priority` or dynamically with a block). Configure prefixes/delimiters (`config.active_job.queue_name_prefix`, `config.active_job.queue_name_delimiter`). Configure worker queue processing order (e.g., `config/queue.yml` for Solid Queue).
*   **Callbacks & Error Handling:** Use `before_enqueue`, `around_perform`, etc. Use `rescue_from`, `retry_on` (with `wait:`, `attempts:`, `jitter:`), `discard_on`.
*   **GlobalID:** Pass Active Record objects directly as arguments; Active Job handles serialization/deserialization. Define custom serializers for unsupported types.
*   **Testing:** Use `ActiveJob::TestHelper` (`assert_enqueued_jobs`, `perform_enqueued_jobs`, `assert_performed_jobs`). Test jobs in isolation or context.

## Active Storage

*   **Purpose:** Manage file uploads (local disk, S3, Azure, GCS).
*   **Setup:** `bin/rails active_storage:install`, `bin/rails db:migrate`. Configure services in `config/storage.yml` and set the service in environment files (`config.active_storage.service = :amazon`). Add required gems (e.g., `aws-sdk-s3`, `google-cloud-storage`).
*   **Associations:** `has_one_attached :avatar`, `has_many_attached :images`. Can specify `service:` or `dependent: :purge_later`.
*   **Forms:** Use `form.file_field :avatar`.
*   **Attaching:** `user.avatar.attach(params[:avatar])` or `attach(io: File.open(...), filename: ..., content_type: ...)`. Can specify `:key` for custom storage path.
*   **Displaying/Linking:** Use `image_tag`, `video_tag`. Generate URLs: `url_for(user.avatar)`, `rails_blob_path(blob, disposition: "attachment")`, `rails_storage_proxy_path(blob)`. Use variants/previews for transformations (`user.avatar.variant(resize_to_limit: [100, 100])`, `video.preview(resize_to_limit: [100, 100]).processed.url`). Use `preprocessed: true` for background variant generation. Configure image processor (`config.active_storage.variant_processor = :vips`).
*   **Direct Uploads:** Enable for client-side uploads directly to storage (`direct_upload: true` on file field). Requires JavaScript setup (`@rails/activestorage`, `import * as ActiveStorage from "@rails/activestorage"; ActiveStorage.start();`). Handle progress via JS events (`direct-upload:initialize`, `progress`, `end`, `error`).
*   **Deleting:** `attachment.purge` (sync), `attachment.purge_later` (async). Use `rake active_storage:purge_unattached` to clean up old, unattached blobs.
*   **Testing:** Use fixtures (`test/fixtures/active_storage/blobs.yml`, `attachments.yml`) and `file_fixture_upload("filename.png", "image/png")` in integration/system tests. Clean up storage after tests.

## Action Text

*   **Purpose:** Rich text editing (Trix editor) and content storage.
*   **Setup:** `bin/rails action_text:install`, `bin/rails db:migrate`.
*   **Association:** `has_rich_text :content`. Can be encrypted: `has_rich_text :content, encrypted: true`.
*   **Forms:** Use `form.rich_text_area :content`.
*   **Displaying:** Simply output the attribute (`<%= @message.content %>`). Action Text handles rendering, including embedded attachments.
*   **Attachments:** Embed Active Record objects (that include `ActionText::Attachable`) or other attachables using Signed Global IDs (SGIDs) via `<action-text-attachment sgid="..."></action-text-attachment>`. Customize rendering via partials (`app/views/attachables/_blob.html.erb`, `app/views/users/_user.html.erb`). Define `to_attachable_partial_path` or `to_missing_attachable_partial_path` on models for custom rendering.

## Action Cable

*   **Purpose:** Real-time features using WebSockets.
*   **Connection:** Define `ApplicationCable::Connection` (`app/channels/application_cable/connection.rb`). Identify connections (e.g., by `current_user`). Handle authentication (e.g., via cookies or tokens). `reject_unauthorized_connection`. Handle exceptions with `rescue_from`.
*   **Channel:** Define channel classes inheriting `ApplicationCable::Channel` (`app/channels/my_channel.rb`). Implement `subscribed` (setup), `unsubscribed` (cleanup), and custom actions called via `perform`. Use `stream_from "stream_name"` or `stream_for ModelInstance` to subscribe clients to broadcastings. Handle exceptions with `rescue_from`.
*   **Broadcasting:** Send messages from the server (e.g., controllers, models, jobs) using `MyChannel.broadcast_to(model, data)` or `ActionCable.server.broadcast("stream_name", data)`.
*   **Client-Side:** Use JavaScript (`@rails/actioncable`) to `createConsumer()`, `consumer.subscriptions.create({ channel: "MyChannel", room: "1" }, { received(data) { ... }, connected() { ... }, disconnected() { ... } })`, and call server actions via `subscription.perform("action_name", { data })`. Enable client-side logging with `ActionCable.logger.enabled = true`.
*   **Configuration:** Configure adapter (`:redis`, `:async`), URL (`config.action_cable.url`), allowed origins (`config.action_cable.allowed_request_origins`), worker pool size. Use `channel_prefix` in `cable.yml` for Redis.
*   **Testing:** Use `ActionCable::Channel::TestCase` and `ActionCable::Connection::TestCase`. Use `assert_broadcasts`, `assert_broadcast_on`.

## I18n (Internationalization)

*   **Setup:** Store translations in YAML files (`config/locales/en.yml`, `config/locales/es.yml`). Structure: `locale: key: subkey: "Translation"`.
*   **Configuration:** Set `config.i18n.available_locales`, `config.i18n.default_locale`, `config.i18n.load_path`, `config.i18n.fallbacks`. `config.i18n.raise_on_missing_translations = true` (default in Rails 7.1+).
*   **Lookup:** Use `t()` or `I18n.t()` helper in views/controllers (`t('.title')` for relative lookup based on `controller.action`). Use `l()` or `I18n.l()` for date/time localization (`l(Time.now, format: :short)`). Use `:default` option for fallbacks. Look up multiple keys: `t([:key1, :key2])`.
*   **Interpolation:** `t('welcome', name: @user.name)` (YAML: `welcome: "Welcome, %{name}!"`).
*   **Pluralization:** Define `zero`, `one`, `other` keys (and potentially `two`, `few`, `many` depending on locale rules). Pass `count:` option: `t('messages', count: @count)`.
*   **Model/Attribute Names:** Define under `activerecord: models:` and `activerecord: attributes:`. Use `Model.model_name.human`, `Model.human_attribute_name(:attr)`.
*   **Setting Locale:** Use `around_action :switch_locale` in `ApplicationController` with `I18n.with_locale(locale) { yield }`. Extract locale from params, domain, user preference, etc. Set `default_url_options` to include locale in URLs automatically.
*   **Error Handling:** Configure `I18n.exception_handler`.

## Active Support

*   **Core Extensions:** Rails extends core Ruby classes (String, Hash, Array, Numeric, Date, Time, etc.) with many useful methods (e.g., `blank?`, `present?`, `try`, `to_param`, `to_sentence`, `pluralize`, `singularize`, `camelize`, `underscore`, `titleize`, `squish`, `truncate`, `parameterize`, time calculations like `2.days.ago`, `beginning_of_day`, `advance`, `change`). Explore the Active Support Core Extensions guide.
*   **Concerns:** Use `ActiveSupport::Concern` for organizing shared module logic in models/controllers.
*   **Notifications:** Use `ActiveSupport::Notifications.instrument("event.name", payload) { ... }` and `.subscribe("event.name") { |*args| ... }` for custom event instrumentation and monitoring.
*   **Caching:** `ActiveSupport::Cache::Store` provides the caching interface (see Caching section).
*   **Messages:** `ActiveSupport::MessageEncryptor` and `ActiveSupport::MessageVerifier` for secure data handling (used by signed/encrypted cookies).
*   **Deprecation:** `ActiveSupport::Deprecation.warn("message", caller)` for handling deprecation warnings in libraries/engines.
*   **Executor/Reloader:** Manage application code loading, reloading in development, and thread safety via `Rails.application.executor.wrap { ... }`. Use `permit_concurrent_loads` carefully.
*   **Inflector:** Customize inflections (`config/initializers/inflections.rb`) for `pluralize`, `singularize`, `camelize`, `underscore`, etc. Define acronyms.
*   **Callbacks:** `ActiveSupport::Callbacks` provides the callback mechanism used throughout Rails.
*   **Time Zones:** `Time.zone`, `Time.current`, `Date.current`. Configure `config.time_zone`.

## Debugging & Logging

*   **Logger:** Use `Rails.logger.debug/info/warn/error/fatal`. Use blocks for efficiency: `logger.debug { "Expensive details: #{obj.inspect}" }`. Configure log level per environment (`config.log_level = :info`). Configure logger instance (`config.logger = ...`).
*   **Tagged Logging:** Add context to logs: `Rails.logger.tagged("User #{current_user.id}", "Request #{request.uuid}") { logger.info "Processed order" }`. Configure tags in `config/environments/*.rb`.
*   **`debug` Helper:** Output object details in views: `<%= debug @object %>` (YAML format).
*   **`debugger`:** Use the `debug` gem. Add `debugger` keyword in code to set breakpoints. Use commands like `c` (continue), `n` (next), `s` (step), `info`, `p`, `pp`, `bt` (backtrace), `watch @ivar`, `catch Exception`, `break line/method`. Use `do:` option for automated commands.
*   **`web-console`:** Provides an interactive console in the browser during development errors or via `console` helper in views/controllers.
*   **Error Reporting:** Use `Rails.error.handle`, `Rails.error.record`, `Rails.error.report`, `Rails.error.unexpected`. Subscribe custom reporters (`Rails.error.subscribe`).

## Command Line (`bin/rails`)

*   **Core Commands:** `new` (create app), `generate` (`g`), `destroy` (`d`), `server` (`s`), `console` (`c`), `dbconsole` (`db`), `runner` (`r`), `test`.
*   **Generators:** `scaffold`, `model`, `controller`, `migration`, `job`, `mailer`, `channel`, `task`, `resource`, `authentication`, `devcontainer`. Use `-h` for help. Override templates in `lib/templates`.
*   **Database:** `db:create`, `db:drop`, `db:migrate`, `db:rollback`, `db:seed`, `db:setup`, `db:reset`, `db:schema:load`, `db:structure:load`, `db:prepare` (create if needed, run migrations). Manage multiple databases (`db:create:all`, `db:migrate:primary`).
*   **Assets:** `assets:precompile`, `assets:clobber`, `assets:clean` (Sprockets). `importmap:pin/unpin/audit` (Importmap).
*   **Routes:** `routes`.
*   **Other:** `middleware`, `notes`, `about`, `tmp:clear`, `log:clear`, `credentials:edit`, `zeitwerk:check`, `dev:cache`.
*   **Console:** Use `app` for requests, `helper` for view helpers, `reload!` to reload code. Use `--sandbox` for rollback on exit.

## Deployment

*   **Asset Precompilation:** Run `RAILS_ENV=production bin/rails assets:precompile` during deployment (unless using live compilation). Configure asset host (`config.asset_host`).
*   **Web Servers:** Puma is the default. Configure workers/threads (`WEB_CONCURRENCY`, `RAILS_MAX_THREADS`).
*   **Reverse Proxies:** Use Nginx or Apache in front of Puma for load balancing, SSL termination, and serving static assets efficiently. Configure headers (`X-Forwarded-For`, etc.).
*   **Environment Variables:** Manage secrets and configuration via environment variables (e.g., `DATABASE_URL`, `RAILS_MASTER_KEY`, API keys). Use `Rails.application.credentials` for the master key.
*   **Deployment Tools:** Capistrano, Kamal, Heroku CLI, Docker, etc. Kamal uses Docker for containerized deployments (`bin/kamal setup`, `bin/kamal deploy`).
*   **Database Setup:** Run `bin/rails db:prepare` or `db:migrate` in production.
*   **Caching:** Configure production cache store (Redis, Memcached).
*   **Logging:** Configure production logger, level, and potentially log aggregation services.

## Engines & Plugins

*   **Purpose:** Create reusable Rails components or applications mountable within a host application.
*   **Generation:** `rails plugin new my_engine --mountable`.
*   **Gemspec:** Define dependencies (`add_dependency`, `add_development_dependency`).
*   **Isolation:** Use `isolate_namespace MyEngine` in `engine.rb` to prevent naming collisions for models, controllers, routes, helpers.
*   **Routes:** Define engine routes in `config/routes.rb` within the engine. Mount in host app: `mount MyEngine::Engine, at: "/my_engine"`.
*   **Migrations:** Engine migrations live in `db/migrate`. Copy to host app using `bin/rails my_engine:install:migrations` or `bin/rails railties:install:migrations`.
*   **Assets:** Engine assets (`app/assets`, `lib/assets`, `vendor/assets`) are available to the host app. Precompile engine-specific assets if needed via initializer.
*   **Overriding:** Host app can override engine models, controllers, views, helpers by creating files at the corresponding path. Use `class_eval` for safe model/controller overrides.
*   **Configuration:** Add configuration options using `mattr_accessor` in the engine's main module. Access via `MyEngine.config_key`. Provide initializers.
*   **Testing:** Test engines within their dummy application (`test/dummy`).
