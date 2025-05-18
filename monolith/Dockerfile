FROM maven as build

COPY src ./src
COPY pom.xml ./pom.xml

RUN mvn clean package -DskipTests=false

RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../TractorStore-1.0-SNAPSHOT.war)

FROM eclipse-temurin:21-jre

WORKDIR /app

COPY --from=build target/test-classes/ /app/test-classes/
COPY --from=build target/classes/ /app/classes/
COPY --from=build target/dependency/ /app/webapp/
COPY --from=build target/TractorStore-1.0-SNAPSHOT.war /app/
COPY --from=build src/main/webapp /app/src/main/webapp

RUN mkdir -p /app/lib
COPY --from=build target/dependency/WEB-INF/lib/*.jar /app/lib/
COPY --from=build target/TractorStore-1.0-SNAPSHOT/WEB-INF/lib/*.jar /app/lib/

EXPOSE 8080
EXPOSE 8081
EXPOSE 8443

CMD ["java", "-Xmx5g", "-Xms4g", "-cp", "/app/test-classes:/app/classes:/app/lib/*", "com.aukevanoost.Start"]