FROM mongo

COPY accounts.json /fixtures/accounts.json
WORKDIR /
COPY run.sh run.sh

ENV TIMEOUT 15
ENV MONGO_HOST mongo
ENV MONGO_PORT 27017
ENV MONGO_DB reaccounts

CMD ["bash", "./run.sh"]
