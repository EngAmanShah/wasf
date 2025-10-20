"use client";
import styles from "@/styles/admin.module.css";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "@/providers/ContextProvider";
import { use } from "react";
import Link from "next/link";
import { auth } from "@/configuration/firebase-config";
import { signOut } from "firebase/auth";
import useAuth from "@/hooks/UseAuth";
import { usePathname, useRouter } from "next/navigation";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import ArrowDropUpSharpIcon from "@mui/icons-material/ArrowDropUpSharp";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

import Loading from "@/components/Loading";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function AdminAccount({ params, children }) {
  const { lang } = use(params);
  const router = useRouter();
  const { contacts } = useContext(Context);
  const pathName = usePathname();
  const { loading, user, isAdmin } = useAuth();
  const [showSettingDropdown, setShowSettingDropdown] = useState(false);

  const unreadMessages = contacts.filter((contact) => contact.read === false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  const toggleSettingDropdown = () => {
    setShowSettingDropdown(!showSettingDropdown);
  };

  const translations = {
    en: {
      products: "Products",
      categories: "Categories",
      articles: "Articles",
      contacts: "Contacts",
      admins: "Admins",
      settings: "Settings",
      profile: "Profile",
      password: "Password",
      email: "Email",
      signOut: "Sign Out",
    },
    ar: {
      products: "المنتجات",
      categories: "الفئات",
      articles: "مقالات",
      contacts: "جهات الاتصال",
      admins: "المسؤولون",
      settings: "الإعدادات",
      profile: "الملف الشخصي",
      password: "كلمة المرور",
      email: "البريد الإلكتروني",
      signOut: "تسجيل الخروج",
    },
  };

  const t = translations[lang] || translations.en;

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      router.push(`/${lang}/login`);
    }
  }, [loading, user, isAdmin]);

  if (loading) {
    return <Loading />;
  }

  return user && isAdmin ? (
    <>
      {/*Header*/}
      <div
        className="d-flex align-items-center justify-content-between px-4 py-3"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        }}
      >
        <Link href={`/${lang}`} className="d-none d-lg-flex">
          <img
            src="/logo.png"
            alt="happy face logo"
            style={{ width: "170px" }}
          />
        </Link>

        <MenuOpenRoundedIcon
          style={{ width: "56px", height: "56px", cursor: "pointer" }}
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasMenu"
          className={`${styles.menuIcon} d-lg-none`}
        />

        <div className="d-flex align-items-center">
          <LanguageSwitcher lang={lang} className="w-100" />
        </div>
      </div>
      <div className="d-flex bg-light">
        <div
          className={`offcanvas-lg offcanvas-${
            lang === "ar" ? "end" : "start"
          }`}
          tabIndex="-1"
          id="offcanvasMenu"
          aria-labelledby="offcanvasMenuLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasMenu"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div
              className="navigation bg-white p-3"
              style={{
                position: "fixed",
                top: "88px",
                bottom: 0,
                overflowY: "auto",
              }}
            >
              <div data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu">
                <Link
                  className={`${styles["account-nav-item"]} mb-1 mb-xl-2 ${
                    pathName === `/${lang}/admin/products`
                      ? styles["active-route"]
                      : ""
                  }`}
                  href={`/${lang}/admin/products`}
                >
                  <LocalMallOutlinedIcon />
                  <h5 className={`m-0 ${lang === "en" ? "ms-3" : "me-3"}`}>
                    {t.products}
                  </h5>
                </Link>
              </div>
              <div data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu">
                <Link
                  className={`${styles["account-nav-item"]} mb-1 mb-xl-2 ${
                    pathName === `/${lang}/admin/categories`
                      ? styles["active-route"]
                      : ""
                  }`}
                  href={`/${lang}/admin/categories`}
                >
                  <CategoryOutlinedIcon />
                  <h5 className={`m-0 ${lang === "en" ? "ms-3" : "me-3"}`}>
                    {t.categories}
                  </h5>
                </Link>
              </div>
              <div data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu">
                <Link
                  className={`${styles["account-nav-item"]} mb-1 mb-xl-2 ${
                    pathName === `/${lang}/admin/articles`
                      ? styles["active-route"]
                      : ""
                  }`}
                  href={`/${lang}/admin/articles`}
                >
                  <ArticleOutlinedIcon />
                  <h5 className={`m-0 ${lang === "en" ? "ms-3" : "me-3"}`}>
                    {t.articles}
                  </h5>
                </Link>
              </div>
              <div
                data-bs-dismiss="offcanvas"
                data-bs-target="#offcanvasMenu"
                style={{ position: "relative" }}
              >
                <Link
                  className={`${styles["account-nav-item"]} mb-1 mb-xl-2 ${
                    pathName === `/${lang}/admin/contacts`
                      ? styles["active-route"]
                      : ""
                  }`}
                  href={`/${lang}/admin/contacts`}
                >
                  <ContactsOutlinedIcon />
                  <h5 className={`m-0 ${lang === "en" ? "ms-3" : "me-3"}`}>
                    {t.contacts}
                  </h5>
                  {unreadMessages.length > 0 && (
                    <div
                      className="badge rounded-pill bg-danger"
                      style={{ position: "absolute", top: 17, right: 53 }}
                    >
                      {unreadMessages.length}
                    </div>
                  )}
                </Link>
              </div>
              <div data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu">
                <Link
                  className={`${styles["account-nav-item"]} mb-1 mb-xl-2 ${
                    pathName === `/${lang}/admin/admins`
                      ? styles["active-route"]
                      : ""
                  }`}
                  href={`/${lang}/admin/admins`}
                >
                  <SupervisorAccountIcon />
                  <h5 className={`m-0 ${lang === "en" ? "ms-3" : "me-3"}`}>
                    {t.admins}
                  </h5>
                </Link>
              </div>
              <div
                className={`${styles["account-nav-item"]} mb-1 mb-xl-2 cursor-pointer`}
                onClick={toggleSettingDropdown}
              >
                <SettingsOutlinedIcon />
                <h5
                  className={`m-0 ${lang === "en" ? "ms-3" : "me-3"} ${
                    lang === "en" ? "me-5" : "ms-5"
                  }`}
                >
                  {t.settings}
                </h5>
                {showSettingDropdown === false ? (
                  <ArrowDropDownSharpIcon />
                ) : (
                  <ArrowDropUpSharpIcon />
                )}
              </div>
              <div>
                {showSettingDropdown && (
                  <div style={{ paddingLeft: "40px" }}>
                    <div
                      data-bs-dismiss="offcanvas"
                      data-bs-target="#offcanvasMenu"
                    >
                      <Link
                        className={`${
                          styles["account-nav-item"]
                        } mb-1 mb-xl-2 ${
                          pathName === `/${lang}/admin/profile`
                            ? styles["active-route"]
                            : ""
                        }`}
                        href={`/${lang}/admin/profile`}
                        style={{ fontWeight: "500" }}
                      >
                        {t.profile}
                      </Link>
                    </div>
                    <div
                      data-bs-dismiss="offcanvas"
                      data-bs-target="#offcanvasMenu"
                    >
                      <Link
                        className={`${
                          styles["account-nav-item"]
                        } mb-1 mb-xl-2 ${
                          pathName === `/${lang}/admin/change-password`
                            ? styles["active-route"]
                            : ""
                        }`}
                        href={`/${lang}/admin/change-password`}
                        style={{ fontWeight: "500" }}
                      >
                        {t.password}
                      </Link>
                    </div>
                    <div
                      data-bs-dismiss="offcanvas"
                      data-bs-target="#offcanvasMenu"
                    >
                      <Link
                        className={`${
                          styles["account-nav-item"]
                        } mb-1 mb-xl-2 ${
                          pathName === `/${lang}/admin/change-email`
                            ? styles["active-route"]
                            : ""
                        }`}
                        href={`/${lang}/admin/change-email`}
                        style={{ fontWeight: "500" }}
                      >
                        {t.email}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`${styles["sign-out"]} ${styles["account-nav-item"]} mt-5 cursor-pointer`}
                onClick={handleLogout}
                data-bs-dismiss="offcanvas"
                data-bs-target="#offcanvasMenu"
              >
                <LogoutOutlinedIcon />
                <h5 className={`m-0 ${lang === "en" ? "ms-3" : "me-3"}`}>
                  {t.signOut}
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className={`p-3 ${styles["account-child-container"]}`}>
          {children}
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
}
