FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
RUN npm install sharp

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV API_URL https://etnu.aum.edu.vn/wp-json/wp/v2
ENV API_RMS_URL https://etnu.aum.edu.vn/wp-json/rankmath/v1/getHead?url=https://etnu.aum.edu.vn

ENV NEXT_PUBLIC_DOMAIN https://etnu.edu.vn
ENV TOKEN eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTcwMjI3NTUyNCwiZXhwIjoxODU5OTU1NTI0fQ.vBY5wG6ZUhTOVaFWnwnpkHN5aK8-fNB17QoQrTKX14M

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.js ./ 
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

USER nextjs

EXPOSE 3001

ENV PORT 3001

CMD ["npm", "start"]