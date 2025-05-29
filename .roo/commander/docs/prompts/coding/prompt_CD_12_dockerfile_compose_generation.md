+++
# --- Dockerfile / docker-compose Snippet Generation Prompt ---
id = "PROMPT-Coding-DockerGen-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Coding-DockerGen-NodeAppDockerfile-20250528170000
title = "Dockerfile / docker-compose Snippet Generation Request"
prompt_type = "generation_technical_code_docker"
domain = "coding_and_technical"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "coding", "docker", "dockerfile", "docker_compose", "containerization", "devops", "infrastructure_as_code"]
# related_schema_doc = ".roo/commander/docs/prompts/coding/prompt_CD_12_dockerfile_compose_generation.README.md" # Link to its own README
+++

Subject: **[Dockerfile/docker-compose] Generation for [Application Type/Service Setup]**

I require assistance generating a **[Specify: Dockerfile OR docker-compose.yml snippet]** for **[Application Type or Service Setup, e.g., 'a Node.js Express application', 'a Python Flask API with a Redis cache', 'a simple static HTML website']**.

**1. Application/Service Details for Containerization:**

   *   **Type of File Requested:** `[Dockerfile OR docker-compose.yml snippet]`
   *   **Application Language/Framework & Version:** `[e.g., Node.js v18 with Express v4, Python 3.9 with Flask v2, Static HTML/CSS/JS, Java 11 with Spring Boot v2.7]`
   *   **Project Directory Structure (Key files/folders relevant to Docker build):** [Briefly describe or show a simplified tree of your project structure, especially where source code, dependency files, and static assets are located.]
       e.g.,
       ```
       /my-node-app
         |- src/
         |  |- index.js
         |  |- ... (other source files)
         |- public/
         |  |- styles.css
         |- package.json
         |- package-lock.json
         |- .dockerignore (if you have specific ideas for it)
       ```
   *   **Dependency Management:** [How are dependencies managed? (e.g., `package.json` for Node.js, `requirements.txt` for Python, `pom.xml` for Maven/Java, `Gemfile` for Ruby).]
   *   **Build Steps (if any, beyond dependency installation):** [Are there any build commands that need to be run (e.g., `npm run build` for a React app, `tsc` for TypeScript, `mvn package` for Java)?]
   *   **Application Entrypoint/Start Command:** [What command is used to start your application inside the container?]
       e.g., `npm start`
       e.g., `python app.py`
       e.g., `java -jar target/my-app.jar`
   *   **Ports Exposed by the Application:** [What port does your application listen on *inside* the container?]
       e.g., `3000` (for Node.js), `5000` (for Flask), `8080` (for Spring Boot)
   *   **Environment Variables Needed at Runtime:** [List any environment variables the application expects to be set at runtime, with placeholder values.]
       e.g.,
       ```
       DATABASE_URL=YOUR_DATABASE_URL
       API_KEY=YOUR_API_KEY
       NODE_ENV=production
       ```
   *   **Volumes/Mounts (if applicable, especially for `docker-compose` or development Dockerfiles):** [Are there any directories that need to be mounted as volumes (e.g., for persistent data, or for live code reloading in development)?]
       e.g., `./db-data:/var/lib/postgresql/data` (for a database service in docker-compose)
       e.g., `./src:/app/src` (for development live reload)

**2. Specific Requirements for `docker-compose.yml` (If "docker-compose.yml snippet" is requested):**

   *   **Services to Include:** [List the services you want in the `docker-compose.yml` file. For each service, briefly describe its role and image (if known, or ask for a suggestion).]
       e.g.,
       ```
       Services:
         - web: (Our Node.js application, build from local Dockerfile)
         - redis: (Standard Redis image from Docker Hub, for caching)
         - db: (PostgreSQL image, for database)
       ```
   *   **Networking Between Services:** [How should services connect? (e.g., "The 'web' service needs to connect to the 'redis' service on host 'redis' and port 6379"). Default Docker Compose networking is often sufficient.]
   *   **Port Mapping for Host:** [Which container ports should be mapped to host ports? e.g., "Map host port 8000 to container port 3000 for the 'web' service."]

**3. Request for Dockerfile / docker-compose.yml Snippet:**

Please generate a **[Re-state: Dockerfile OR docker-compose.yml snippet]** based on the details provided above.

*   **For a Dockerfile:**
    *   It should use an appropriate base image.
    *   Include steps for setting up the working directory, copying necessary files, installing dependencies, building the application (if needed), exposing the correct port, and setting the CMD/ENTRYPOINT.
    *   Consider best practices like using a `.dockerignore` file (suggest common entries), multi-stage builds (if appropriate for optimization, e.g., for compiled languages or frontend builds), and running as a non-root user.
*   **For a docker-compose.yml snippet:**
    *   Define the requested services with appropriate image/build contexts, ports, environment variables, and volumes.
    *   Set up basic networking if specific links are needed beyond default.

The generated file should be well-commented to explain key instructions and choices.