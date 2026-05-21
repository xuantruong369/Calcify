- feat: Thêm chức năng
- fix: sửa lỗi
- refactor: tối ưu code
- style: css/ui
- docs: tài liệu

Nhận task
→ tạo branch
→ code
→ commit
→ test
→ fix
→ merge
→ deploy
→ review
→ tiếp tục task mới

Các branch chuẩn

- main: code production ổn định
- develop: nơi tổng hợp feature
- feature/\*: phát triển tính năng
- bugfix/\*: sửa bug
- hotfix/\*: fix lỗi khẩn cấp

Workflow thực tế

1. Clone repo: git clone <repo>
2. git checkout develop
3. Tạo feature branch: git checkout -b feature/calculator-ui
4. Làm việc trên branch riêng: code Calculator.jsx, Button.jsx, ...
5. Commit nhỏ và rõ ràng: git commit -m "feat: add calculator display component
6. git push origin feature/calculator-ui
7. Pull Request
8. Code Review: trưởng nhóm hoặc teammate review
9. Refactor sau review
10. Merge
