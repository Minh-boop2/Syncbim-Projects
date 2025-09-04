# Trang chủ giới thiệu nền tảng: SyncBIM

## <a name="quick-start">🤸 Bắt đầu</a>

Thực hiện theo các bước sau để thiết lập dự án cục bộ trên máy của bạn.

**Điều kiện tiên quyết**

Đảm bảo bạn đã cài đặt các mục sau trên máy của mình:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cài đặt**

Cài đặt các phụ thuộc của dự án bằng npm:

```bash
npm install
```

**Chạy dự án**
Nếu bạn chạy không được tìm thư mục vite.config.js copy dòng này

```bash

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

const hasKey = fs.existsSync("ssl/private.key");
const hasCert = fs.existsSync("ssl/certificate.crt");

export default defineConfig({
  plugins: [react()],

  server:
    hasKey && hasCert
      ? {
          https: {
            key: fs.readFileSync("ssl/private.key"),
            cert: fs.readFileSync("ssl/certificate.crt"),
          },
          host: true,
        }
      : {
          https: false, // <- chạy HTTP bình thường khi thiếu cert
          host: true,
        },
});

```




```bash

npm run dev
```

Mở [http://localhost:5173](http://localhost:5173) trong trình duyệt của bạn để xem dự án.

#
