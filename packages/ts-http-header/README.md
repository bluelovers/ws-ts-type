# ts-http-header

標準 HTTP 請求與回應標頭的 TypeScript 類型定義

TypeScript type definitions for standard HTTP request and response headers

## 功能特點 / Features

- 完整的 HTTP 請求標頭類型定義
- Complete HTTP request header type definitions
- 完整的 HTTP 回應標頭類型定義
- Complete HTTP response header type definitions
- 參考 RFC 7231 標準
- Reference RFC 7231 standard
- 支援標準與非標準標頭
- Support standard and non-standard headers

## 安裝 / Install

```bash
yarn add ts-http-header
yarn-tool add ts-http-header
yt add ts-http-header
```

## 使用範例 / Usage Example

```typescript
import { IRequestHeaders, IResponseHeaders, IHeaders } from 'ts-http-header';

// 使用請求標頭類型
const requestHeaders: IRequestHeaders = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123',
};

// 使用回應標頭類型
const responseHeaders: IResponseHeaders = {
    'Content-Type': 'application/json',
    'Content-Length': '1024',
    'Cache-Control': 'max-age=3600',
};

// 合併標頭類型
const allHeaders: IHeaders = {
    ...requestHeaders,
    ...responseHeaders,
};
```
