FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Kaweeshachamodx/WhatsAsenaPublic-1 /root/WhatsAsenaPublic
WORKDIR /root/WhatsAsenaPublic/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
