FROM mongo

COPY accounts.json /accounts.json

CMD mongoimport --host mongo --db reaccounts --collection accounts --type json --file /accounts.json --jsonArray
