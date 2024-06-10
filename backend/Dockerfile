# Step 1: Use an official Python runtime as a parent image
FROM python:3.10-slim

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the requirements file into the container
COPY requirements.txt .

# Step 4: Install the necessary dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Step 5: Copy the rest of the project files into the container
COPY . .

