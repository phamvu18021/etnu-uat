# Cấu trúc Dự án (Project Structure)

Dự án này được xây dựng dựa trên Next.js App Router với kiến trúc mô-đun, dễ mở rộng và bảo trì. Dưới đây là mô tả chi tiết về ý nghĩa và quy định sử dụng của từng thư mục.

```text
d:\template_nextjs/
├── public/                 # Chứa các tài nguyên tĩnh (hình ảnh, fonts, svg, favicon...).
│                           # Các file ở đây có thể truy cập trực tiếp qua URL gốc (VD: /next.svg).
│
├── src/                    # Thư mục gốc chứa toàn bộ mã nguồn ứng dụng.
│   ├── app/                # Nơi chứa các routes của Next.js (App Router).
│   │   ├── _components/    # Các thành phần giao diện chỉ dùng riêng cho trang hiện tại.
│   │   ├── layout.tsx      # Root Layout: Giao diện khung dùng chung cho toàn bộ website (bao gồm Redux Provider).
│   │   └── page.tsx        # Trang chủ mặc định.
│   │
│   ├── components/         # Thư mục chứa các UI component dùng chung cho từ 2 trang trở lên.
│   │   └── ui/             # View nền tảng, cơ bản (như Button, Input, Modal, v.v.).
│   │
│   ├── lib/                # Chứa các hàm tiện ích (`utils`) và công cụ hỗ trợ lõi.
│   │   ├── fetchClient.ts  # Custom wrapper cho Fetch API (Gắn Base URL, Authentication Bearer Token...).
│   │   └── utils.ts        # Hàm xử lý chuỗi class giao diện (như gộp tailwind classes: `cn()`).
│   │
│   └── store/              # Thư mục chứa cấu hình Redux Toolkit (Quản lý trạng thái toàn cục - Global State).
│       ├── features/       # Nơi chứa các Redux Slices (chia theo mô-đun chức năng, VD: `counterSlice.ts`).
│       ├── hooks.ts        # Typed-hooks được cấu hình sẵn theo TypeScript (`useAppDispatch`, `useAppSelector`).
│       ├── provider.tsx    # Thành phần Provider bọc bên ngoài ứng dụng để khởi chạy Redux theo Next.js SSR.
│       └── store.ts        # Điểm cấu hình trung tâm (Config & create Store instances cho từng Request).
│
├── .husky/                 # Nơi định nghĩa các kịch bản Git Hook (VD: `pre-commit` hook bắt lỗi khi commit).
├── .env.example            # Template tham khảo cho các biến môi trường cấu hình tại máy lập trình viên.
├── eslint.config.mjs       # Cấu hình quy tắc kiểm tra định dạng code (ESLint).
├── lint-staged.config.mjs  # Cấu hình tự động định dạng và linting nhắm mục tiêu cho những file bị sửa đổi trước commit.
├── next.config.ts          # File thiết lập và mở rộng các tính năng của Webpack/Turbopack từ Next.js.
├── package.json            # Quản lý metadata của dự án, bộ thực thi scripts và thông tin cài đặt thư viện.
├── postcss.config.mjs      # Tiền xử lý CSS cho bộ khung Tailwind CSS.
├── tailwind.config.ts      # Khai báo và cấu hình tuỳ chỉnh giao diện, colors, fonts cho Tailwind.
└── tsconfig.json           # File cấu hình định dạng Strict Typescript cho dự án.
```

## Quy tắc đặt thư mục/tập tin (Best Practices)

1. **Route Components**: Nếu một component chỉ dành riêng cho 1 Route cụ thể, hãy đặt component đó trong thư mục `_components/` (Private folder) nằm cùng nhánh với `page.tsx`.
2. **Shared Components**: Các component được sử dụng lại ở ≥2 trang thì mới chuyển chúng ra thư mục chung `src/components/`.
3. **Data Fetching/API**: Dùng `src/lib/fetchClient.ts` thay cho `axios` hoặc `fetch` thuần tuý ở khắp nơi để đảm bảo an toàn Bearer Token và dễ xử lý Exception tập trung.
4. **Imports**: Template này hỗ trợ alias `@/`. Luôn luôn sử dụng `import { ... } from "@/components/..."` thay vì đường dẫn thủ công `../../ components/`.
