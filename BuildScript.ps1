.\mvnw.cmd package
docker build -t "sandwichapp" .
docker run -d -p 80:8080 --name "sandwichapp" sandwichapp