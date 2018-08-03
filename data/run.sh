#!/usr/bin/env bash
echo "Running..."
sleep ${TIMEOUT}
MONGO_PATH="$MONGO_HOST:$MONGO_PORT/$MONGO_DB"
echo "Connecting to $MONGO_PATH"
mongo "$MONGO_PATH" --eval "db.dropDatabase();"
echo "Database is clean"
mongoimport --host "$MONGO_HOST" --port "$MONGO_PORT" --db "$MONGO_DB" --collection accounts --type json --file /fixtures/accounts.json --jsonArray
echo "Data imported"
