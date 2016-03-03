FROM node:5.7.1-onbuild

ADD package.json /src/package.json
RUN cd /src; npm install

ADD . /src

WORKDIR "/src"

CMD ["npm", "run", "test-ng", "--", "--single-run"]
