FROM openjdk:22-slim
COPY target/sandwich-0.0.1-SNAPSHOT.jar /app/myApp.jar
EXPOSE 4200
ENTRYPOINT ["java","-jar","/app/myApp.jar"]