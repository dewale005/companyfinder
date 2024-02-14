FROM python:3.9-alpine3.13
LABEL key="olagunjuadewale.dev"

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /backend/requirements.txt
COPY . /backend

WORKDIR /backend
EXPOSE 8000

RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    apk add --update --no-cache postgresql-client && \
    apk add --update --no-cache --virtual .tmp-deps \
        build-base postgresql-dev musl-dev && \
    /py/bin/pip install -r /backend/requirements.txt && \
    apk del .tmp-deps && \
    adduser --disabled-password --no-create-home backend

ENV PATH="/py/bin:$PATH"

USER backend