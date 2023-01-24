FROM scratch
ADD x86_64/07f2be6b3e827d0b30b27ab57ef0f73bee7f72f9a356f20dac5d173f1f69c8fc.tar.xz /
ADD x86_64/1b2a04eab6fb457e8bf4ac25c975a195836895667fa7e49bf66b2494de9e98ed.tar.xz /
ADD x86_64/5b68db45c1e1d3ed087cecb5df2e6b8f03e9e1770acad8c36de75a55f9c47eee.tar.xz /
ADD x86_64/81072ae89ebc9f2c33954efc205bada1bea4435f2915fdd1c1310b7a5fd6ec19.tar.xz /
ADD x86_64/8ec16f5337e885ae09e3fb8da5753165b3f69815f6f0e49ff1a529cd7547e572.tar.xz /
ADD x86_64/c6220238d943910b6133f24f73a7580f90a44912524ff4ae0452f405ddf8e600.tar.xz /

ENV LANG=en_US.UTF-8
ENV TZ=:/etc/localtime
ENV PATH=/var/lang/bin:/usr/local/bin:/usr/bin/:/bin:/opt/bin
ENV LD_LIBRARY_PATH=/var/lang/lib:/lib64:/usr/lib64:/var/runtime:/var/runtime/lib:/var/task:/var/task/lib:/opt/lib
ENV LAMBDA_TASK_ROOT=/var/task
ENV LAMBDA_RUNTIME_DIR=/var/runtime

WORKDIR /var/task

FROM public.ecr.aws/lambda/nodejs:12

# Copy function code and dependencies
COPY package.json ./
COPY yarn.lock ./
COPY index.js ${LAMBDA_TASK_ROOT}

# Install dependencies
RUN npm install -g yarn
RUN yarn

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "app.handler" ]

ENTRYPOINT ["yarn", "start"]