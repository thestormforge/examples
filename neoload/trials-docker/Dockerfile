FROM python:3.10-buster

USER root
RUN apt-get update && apt-get install -y --no-install-recommends \
		uuid-runtime \
		curl \
		jq \
	&& rm -rf /var/lib/apt/lists/*	

RUN pip3 install neoload
COPY docker-entrypoint.sh parse_report.sh  /
RUN chmod +x docker-entrypoint.sh parse_report.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
