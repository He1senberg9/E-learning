export interface CourseCatalog {
  maDanhMuc: string;
  tenDanhMuc: string;
}
export interface Course {
  maKhoaHoc: string;
  tenKhoaHoc: string;
}

export interface CourseDetail {
  maKhoaHoc: string;
  biDanh: string;
  tenKhoaHoc: string;
  moTa: string;
  hinhAnh: string;
  luotXem: number;
  maNhom: string;
  ngayTao: string;
  soLuongHocVien: string;
  nguoiTao: {
    taiKhoan: string;
    hoTen: string;
    maLoaiNguoiDung: string;
    tenLoaiNguoiDung: string;
  };
  danhMucKhoaHoc: { maDanhMucKhoahoc: string; tenDanhMucKhoaHoc: string };
}
export interface RegisterCourse {
  maKhoaHoc: string;
  taiKhoan: string;
}
export interface CourseState {
  courseCatalogs: CourseCatalog[];
  isCourseCatalogsLoading: boolean;
  courseCatalogsError: undefined | string;

  courseList: CourseDetail[];
  isCourseListLoading: boolean;
  courseListError: undefined | string;
}
