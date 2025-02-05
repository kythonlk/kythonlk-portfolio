---
title: 'How to Localhost Supabase with Docker and Portainer'
description: '<p>If you are working with Supabase locally using Docker, you might run into a small issue where the database password is not set up correctly the first time you run your project. But do not worry! I will walk you through how to get everything up and running with Docker and Portainer.</p>'
pubDate: 'February 05, 2025'
heroImage: '/data/post-23.jpg'
---

### Prerequisites

Before we begin, make sure you have the following installed on your computer:
1. **Docker** – If you don't have Docker installed yet, you can download it [here](https://www.docker.com/get-started).
2. **Portainer** – Portainer makes managing Docker containers easier. You can learn more about it [here](https://www.portainer.io/).
3. **Supabase Docker Compose file** – This will contain the setup for running Supabase services.

---

### Step 1: Install the GitHub Repo and Set Up Docker

1. **Clone the Supabase GitHub repository**:

   First, download the Supabase Docker files by running:

   ```bash
   git clone https://github.com/supabase/supabase.git
   cd supabase/docker
   ```

2. **Install Docker on Ubuntu**:

   If you don't already have Docker installed, follow these commands to install it:

   ```bash
   sudo apt-get update
   sudo apt-get install docker
   ```

3. **Install Docker Compose Extension**:

   Docker Compose is required to easily manage multi-container applications. Install it using the following commands:

   ```bash
   sudo apt-get install docker-compose-plugin
   ```

---

### Step 2: Update the .env File with Security Keys

Before running the Supabase project, you need to update your `.env` file with some essential keys for security.

Go to [this Supabase guide](https://supabase.com/docs/guides/self-hosting/docker) for more details on generating API keys.

Here’s a list of keys you need to update in your `.env` file:

- **POSTGRES_PASSWORD** – The password for the PostgreSQL database.
- **JWT_SECRET** – The JWT secret key for your Supabase project.
- **ANON_KEY** – The anonymous key for your Supabase project (you can generate it on Supabase's website).
- **SERVICE_ROLE_KEY** – Similar to the ANON_KEY but for the service role.
- **DASHBOARD_USERNAME** – The username for the Supabase dashboard (you can choose any).
- **DASHBOARD_PASSWORD** – The password for the Supabase dashboard (you can choose any).
- **SECRET_KEY_BASE** – The secret key base for your Supabase project.
- **VAULT_ENC_KEY** – The vault encryption key for your Supabase project.

Here is an example `.env` setup:

```bash
POSTGRES_PASSWORD=C9mJxBNPfHvr6e8
JWT_SECRET=qwwdqdqd44t4f
ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAwLAogICJleHAiOiAxODk1Nzc0NDAwCn0.G36SmQzUImRU1GPEocmUcXFN
SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogInNlcnZpY2Vfcm9sZSIsCiAgImlzcyI6ICJzdXBhYmFz6IDE3MzgwMDgwMDAsCiAgImV4cCI6IDE4OTU3NzQ0MDAKfQ.pOVAzpxy2LpO6_5AeHEy6qHTMHERCemL7U
DASHBOARD_USERNAME=supabase
DASHBOARD_PASSWORD=qxu3kOSFA8PBhrdUqx5JcYZt3CCiulPQ5FTq8/EjBm5g
SECRET_KEY_BASE=BONi344NRWA7GpVwuUxORMtt51pBRlcG6kHNAJjpP9XnxXO2TJIr/+3AGFA==
VAULT_ENC_KEY=XEc47XTLH93piksrNL12YK4fPTk=
```

Make sure to replace these example values with the actual keys generated from https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys


**Start Supabase with Docker Compose**:

   Now that everything is installed, run the following command to start Supabase in the background:

   ```bash
   docker compose up -d
   ```

---

### Step 3: Run into Database Password Error?

Now, here's where you might face a problem. When you first run `docker compose up -d`, you may see an error related to the database password. Don’t worry, this is something that can be fixed easily.

### Step 4: Fixing the Database Password Error

To fix this issue, you'll need to update the password in your Docker container. Follow these steps:

1. Open the terminal and access the Supabase database container by running this command:
   
   ```bash
   docker exec -it supabase-db bash
   ```

2. Once inside, log into the Supabase database with the `psql` command:
   
   ```bash
   psql -U supabase_admin
   ```

   The `supabase_admin` user is the main administrative user for the database.

3. Now, you need to change the database password. Run this command:

   ```bash
   ALTER USER postgres WITH PASSWORD 'password that you added on .env';
   ```

   Replace `'password that you added on .env'` with the actual password you've set in the `.env` file.

4. Exit the database shell by typing `exit`, then run `exit` again to leave the Docker container.

---

### Step 5: Restart the Docker Containers

After updating the password, go ahead and restart the containers to apply the changes:

```bash
docker compose up -d
```

This will bring the Supabase containers back up with the updated database password.

---

### Step 6: Done! 

That’s it! You should now be able to access Supabase locally without any issues.

---

### Using Portainer for Easier Management

If you want a more visual way to manage your Docker containers, Portainer is a great tool. It allows you to see all your running containers and even make changes with a few clicks.

1. Install Portainer by running:

   ```bash
   docker volume create portainer_data
   docker run -d -p 9000:9000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
   ```

2. Once Portainer is up and running, open it by going to `http://localhost:9000`. You can log in and easily manage your Supabase containers.

---


By following these steps, you should be able to get Supabase running locally with Docker and Portainer without any major issues. If you run into problems with the database password, just follow the steps to fix it, and you’ll be good to go!

If you have any questions or run into any other issues, feel free to mail me at kythonlk@gmail.com, and I'll help you out!
