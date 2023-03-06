FROM python:3.8
RUN pip install Flask gunicorn
WORKDIR /app
COPY . /app
EXPOSE 8000
CMD ["gunicorn", "-b", "0.0.0.0:8000", "app:app"]
