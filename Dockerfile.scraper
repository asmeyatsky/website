# Use an official Python runtime as a parent image
FROM python:3.9-slim-buster

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container at /app
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the script and the config file into the container at /app
COPY scraper.py .
COPY search_config.json .

# Run the scraper script when the container launches
CMD ["python", "scraper.py"]
