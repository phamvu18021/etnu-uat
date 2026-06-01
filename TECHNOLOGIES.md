# Bộ công nghệ (Tech Stack)

Dự án này sử dụng những thư viện và công cụ được tối ưu hoá tốt nhất trong năm 2025 cho ứng dụng Next.js. Template này nhằm đảm bảo tính toàn vẹn kiểu dữ liệu (Type-Safety), hiệu năng giao diện cao (Performance) và kiểm soát chất lượng mã nguồn chuyên nghiệp từ khâu lập trình tới thiết lập git (TCD/CI).

## 1. Core Framework

- **[Next.js 16.1.6](https://nextjs.org/)**: Framework React phát triển theo kiến trúc App Router, mang đến khả năng cấu trúc routing bằng thư mục và xử lý React Server Component (RSC), kết hợp Rendering cả SSR/SSG. Đi kèm **Turbopack** mạnh mẽ hỗ trợ tối đa tốc độ hot-reload trên môi trường Dev.
- **[React 19](https://react.dev/)**: Bản React Server/Client Architecture mới nhất tăng cường xử lý Hooks và các tiến trình render tự động tối ưu của React-DOM.
- **[TypeScript 5](https://www.typescriptlang.org/)**: Sử dụng để ngăn ngừa lỗi bất ngờ ở runtime, áp dụng strict typings mạnh mẽ cho API responses, các component props, và Redux Global State.

## 2. Global State Management (Quản lý trạng thái)

- **[Redux Toolkit (RTK)](https://redux-toolkit.js.org/)**: Giải pháp state-management đáng tin cậy. Boilerplate sử dụng mô hình thiết kế `makeStore()` để khởi tạo store độc lập ở mỗi React request nhằm ngăn rò rỉ bộ nhớ (memory-leak) do đặc tính SSR của Next.js, đi kèm với cấu trúc "Feature Slices" và Typed-hooks (`useAppSelector`, `useAppDispatch`).

## 3. Styling & Cấu trúc giao diện

- **[Tailwind CSS (áp dụng PostCSS)](https://tailwindcss.com/)**: Framework utility-first CSS mang lại tiện ích thiết kế linh hoạt, gọn nhẹ, build time nhỏ.
- **[clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge)**: Hai công cụ hỗ trợ xử lý việc chắp nối String linh hoạt trong React Component mà không lo bị trùng lặp hoặc xung đột (conflict) CSS class của Component gốc đối với Component kế thừa. Cả 2 được tích hợp thành một hàm `cn()` để tiện dụng hoá.

## 4. Giao thức Mạng (Network & Fetching)

- **Native Fetch Wrapper**: Dự án không dùng thư viện ngoài (như Axios) mà chọn dùng `Fetch API` của môi trường Node.js. Lớp bao phủ (`src/lib/fetchClient.ts`) đảm nhiệm gán base URL, chèn Authentication Tokens, và tự động hứng lỗi Server để báo cáo lại cho giao diện React dưới một khối `try-catch` trong tương lai dễ dàng.

## 5. Coding Standards & Linter (Kiểm soát chất lượng mã)

- **[ESLint](https://eslint.org/) (Kèm cấu hình `eslint-config-next`)**: Trình quét mã tĩnh, áp dụng các quy tắc tiêu chuẩn nghiêm ngặt.
- **[Prettier](https://prettier.io/)**: Trình định dạng mã được tích hợp chung cấu hình để tránh xung đột linter. Đặc biệt mở rộng sử dụng plugin **`prettier-plugin-tailwindcss`** giúp sắp xếp tự động các Tailwind class theo trật tự logic (Tổ chức layout -> Spacing -> Color) giúp mã dễ đọc hơn.

## 6. Git Hooks & Code Quality (Chống rác Github)

Bảo vệ mã nguồn trước khi thao tác `git commit`:

- **[Husky](https://typicode.github.io/husky/)**: Cho phép quản lý Git hook script dính vào repo, kích hoạt quá trình kiểm tra linter trước khi cho phép mã được commit vào local Repo.
- **[lint-staged](https://github.com/lint-staged/lint-staged)**: Công cụ thu hẹp phạm vi kiểm tra cho Linter - tối ưu thay vì quét toàn dự án thì nó chỉ chạy `prettier` & `eslint` trên những file thực sự bị thay đổi (`staged files`) trước lúc commit lên.
