FROM node:onbuild

ADD package.json /src/package.json
RUN cd /src; npm install

ADD . /src

WORKDIR "/src"

RUN ["npm", "run", "test-ng", "--", "--single-run"]
RUN ["npm", "run", "test-react"]

CMD ["npm", "start"]
