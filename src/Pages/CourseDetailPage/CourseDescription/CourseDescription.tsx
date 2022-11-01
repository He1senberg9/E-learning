import React from "react";
import { Typography, Container, Box } from "@mui/material";

type Props = { description: string | undefined };

const CourseDescription = ({ description }: Props) => {
  return (
    <Box sx={{ backgroundColor: "primary.light" }}>
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" sx={{ mb: "10px", textAlign: "center" }}>
          Giới thiệu
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 25 }}>
          {/* 1. Việc sử dụng mô hình MVC trong xây dựng trang web sẽ khiến chúng ta
          dễ dàng quản trị nội dung trang web hơn. 2. Hỗ trợ tốt hơn cho phương
          pháp TDD hiện đại: Viết kiểm thử trước, viết code chương trình sau. 3.
          ASP.NETđược hỗ trợ mạnh mẽ bởi bộ thư viện phong phú và đa dạng của
          .Net Framework, làm việc với XML, Web Service, truy cập cơ sở dữ liệu
          qua ADO.Net,… 4. ASP.NET sử dụng phong cách lập trình mới: Code
          behide. Tách code riêng, giao diện riêng. Dễ đọc, dễ quản lý và bảo
          trì 5. Kiến trúc lập trình giống lập trình ứng dụng trên Windows. Nên
          nếu có kinh nghiệp lập trình ứng dụng Windows khi chuyển sang làm web
          sẽ rất nhanh chóng. 6. Hỗ trợ quản lý trạng thái của các control 7. Tự
          động phát sinh mã HTML cho các Server control tương ứng với từng loại
          trình duyệt 8. Hỗ trợ nhiều cơ chế cache. 9. Ưu điểm trong quá trình
          triển khai cài đặt + Không cần lock, không cần đăng ký DLL + Cho phép
          nhiều hình thức cấu hình ứng dụng 10. Hỗ trợ quản lý ứng dụng ở mức
          toàn cục + Global.asax có nhiều sự kiện hơn + Quản lý session trên
          nhiều Server, không cần Cookies. */}
          {description}
        </Typography>
      </Container>
    </Box>
  );
};

export default CourseDescription;
