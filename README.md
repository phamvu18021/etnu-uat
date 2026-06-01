# Next.js 16 Boilerplate Template 🚀

Đây là một template chuẩn mực dành cho các dự án Next.js khởi tạo trong tương lai, được cấu hình sẵn với toàn bộ các công nghệ hiện đại và best practices (App Router, Redux Toolkit, Tailwind CSS, Prettier, ESLint, Husky,...).

- 📄 Chi tiết kiến trúc dự án xem tại: [STRUCTURE.md](./STRUCTURE.md)
- ⚙️ Chi tiết công nghệ sử dụng xem tại: [TECHNOLOGIES.md](./TECHNOLOGIES.md)

---

## Cách sử dụng Template này cho một dự án mới

Để khởi tạo một dự án mới hoàn toàn (sạch lịch sử commit) dựa trên bộ khung này, bạn có thể thực hiện theo 2 cách dưới đây:

### Cách 1: Sử dụng tính năng "Use this template" của Github

_(Chỉ dùng được nếu bạn đẩy source code này lên Github và cấu hình nó là một Template Repository)._

1. Truy cập vào giao diện repository này trên GitHub.
2. Bấm vào nút màu xanh **"Use this template"** -> **"Create a new repository"**.
3. Điền tên dự án mới và tạo repo.
4. Clone repo mới tạo về máy tính của bạn và chạy chuỗi lệnh khởi tạo dự án:

```bash
# Clone dự án mới về máy
git clone <URL-repo-mới-tạo>
cd <tên-thư-mục-repo>

# Cài đặt thư viện
npm install

# Khởi tạo biến môi trường
cp .env.example .env.local

# Khởi tạo Git Hooks (Husky)
npx husky init
git config core.hooksPath .husky/_

# Chạy dự án
npm run dev
```

### Cách 2: Clone thủ công bằng Git CLI (Khuyên dùng)

Dành cho trường hợp bạn muốn clone trực tiếp từ thư mục local hoặc từ link Git:

**Bước 1: Clone mã nguồn về máy (Lưu ý thay tên thư mục `my-new-project` bằng tên dự án thực tế bạn muốn)**

```bash
git clone <đường-dẫn-repo-template-này> my-new-project
cd my-new-project
```

**Bước 2: Xoá bỏ lịch sử Git cũ của Template**
Bạn cần gỡ bỏ kết nối remote tới template gốc và xoá luôn lịch sử git cũ để bắt đầu dự án mới cho sạch sẽ:

```bash
# Xoá hoàn toàn thư mục .git cũ (Trên Windows dùng PowerShell/CMD)
rm -rf .git  # Hoặc rd /s /q .git (nếu dùng Command Prompt Windows)

# Khởi tạo lại một git cho dự án hoàn toàn mới
git init
```

**Bước 3: Liên kết với Repository mới của dự án mới**
Tạo một dự án trống trên Git (Github/Gitlab/Bitbucket), lấy đường dẫn repository mới của bạn và liên kết:

```bash
git remote add origin <đường-dẫn-repo-git-mới-cua-ban>
```

---

## Các thao tác Cài đặt ban đầu cho dự án mới

Sau khi đã clone thành công bộ khung trống về dự án mới, bạn cần thực hiện các thao tác để kích hoạt hệ thống:

**1. Cài đặt các gói thư viện (Dependencies):**

```bash
npm install
```

**2. Khởi tạo biến môi trường:**
Copy mẫu biến môi trường có sẵn sang một file `.env.local` thực tế (được gitignore để bảo mật thông tin).

```bash
cp .env.example .env.local
```

**3. Khởi tạo lại Git Hook (Husky v9+):**
Đảm bảo hệ thống bắt lỗi (Linter) trước khi commit của Husky được kích hoạt trên hệ thống máy trạm của lập trình viên tham gia.

```bash
npx husky init
git config core.hooksPath .husky/_
```

_(Nếu bạn đang xài Bash/WSL trên Windows, bạn cũng có thể mở file `.husky/pre-commit` và đổi lệnh thành `npx.cmd lint-staged` nếu bị lỗi)._

**4. Chạy dự án:**
Thử nghiệm chạy local server ở môi trường phát triển:

```bash
npm run dev
```

Mở trình duyệt tại địa chỉ [http://localhost:3000](http://localhost:3000) để xem trước màn hình.

---

## 5. Dọn dẹp Bộ khung Mẫu (Cleaning)

Khi bắt đầu code dự án thực tế, bạn có thể xoá bỏ các hướng dẫn và ví dụ mẫu của nền tảng này:

- Xóa các file Markdown tài liệu gốc: `HOW_TO_CLONE.md`, `STRUCTURE.md`, `TECHNOLOGIES.md`, và sửa lại file `README.md` này theo ý bạn.
- Xóa Component Redux ví dụ:
  - Thư mục slice: `src/store/features/counter` (Nhớ xóa cả import của reducer trong `src/store/store.ts`).
  - Giao diện: `src/app/_components/Counter.tsx`.
- Chỉnh sửa lại `src/app/page.tsx` và xóa bỏ nội dung thẻ `<Counter />` đã được tôi viết sẵn.

---

## Commit đầu tiên cho dự án

Sau khi làm xong các bước trên, hãy commit toàn bộ source code ban đầu này lên nhánh `main` của dự án mới:

```bash
git add .
git commit -m "Init: Khởi tạo dự án Next.js từ Boilerplate"
git branch -M main
git push -u origin main
```
