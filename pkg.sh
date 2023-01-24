#! /bin/bash

rm ../ephemeral-journal-lambda.zip
zip -r ../ephemeral-journal-lambda.zip event.json index.js package.json README.md yarn.lock