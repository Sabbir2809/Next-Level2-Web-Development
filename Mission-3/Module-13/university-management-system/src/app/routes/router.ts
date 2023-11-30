import { Router } from "express";
import { AcademicDepartmentRoutes } from "../modules/academicDepartment/academicDepartment.route";
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";
import { StudentRoutes } from "../modules/student/student.route";
import { UserRoutes } from "../modules/user/user.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    router: UserRoutes,
  },
  {
    path: "/students",
    router: StudentRoutes,
  },
  {
    path: "/academic-semesters",
    router: AcademicSemesterRoutes,
  },
  {
    path: "/academic-faculties",
    router: AcademicFacultyRoutes,
  },
  {
    path: "/academic-departments",
    router: AcademicDepartmentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
