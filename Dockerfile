FROM openjdk:22-slim
COPY target/sandwich-0.0.1-SNAPSHOT.jar /app/myApp.jar
EXPOSE 80
ENTRYPOINT ["java","-jar","/app/myApp.jar"]