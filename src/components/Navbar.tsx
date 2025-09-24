import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";

type MenuItem = { label: string; href: string; title: string };
type MenuGroup = { id: string; label: string; items: MenuItem[] };

export function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const groups: MenuGroup[] = [
    {
      id: "products",
      label: t("menu.products.label"),
      items: [
        {
          label: t("menu.products.platform"),
          href: "/produits/plateforme",
          title: t("menu.products.platformTitle"),
        },
        {
          label: t("menu.products.mobile"),
          href: "/produits/application-mobile",
          title: t("menu.products.mobileTitle"),
        },
        {
          label: t("menu.products.web"),
          href: "/produits/logiciel-saas",
          title: t("menu.products.webTitle"),
        },
      ],
    },
    {
      id: "solutions",
      label: t("menu.solutions.label"),
      items: [
        {
          label: t("menu.solutions.employees"),
          href: "/solutions/gestion-employes",
          title: t("menu.solutions.employeesTitle"),
        },
        {
          label: t("menu.solutions.reporting"),
          href: "/solutions/reporting",
          title: t("menu.solutions.reportingTitle"),
        },
        {
          label: t("menu.solutions.incidents"),
          href: "/solutions/incidents-conformite",
          title: t("menu.solutions.incidentsTitle"),
        },
        {
          label: t("menu.solutions.programs"),
          href: "/solutions/programmes-prevention",
          title: t("menu.solutions.programsTitle"),
        },
      ],
    },
    {
      id: "services",
      label: t("menu.services.label"),
      items: [
        {
          label: t("menu.services.support"),
          href: "/services/support",
          title: t("menu.services.supportTitle"),
        },
        {
          label: t("menu.services.training"),
          href: "/services/formation",
          title: t("menu.services.trainingTitle"),
        },
        {
          label: t("menu.services.integration"),
          href: "/services/integration",
          title: t("menu.services.integrationTitle"),
        },
      ],
    },
    {
      id: "industries",
      label: t("menu.industries.label"),
      items: [
        {
          label: t("menu.industries.enterprise"),
          href: "/industries/entreprises",
          title: t("menu.industries.enterpriseTitle"),
        },
        {
          label: t("menu.industries.sme"),
          href: "/industries/pme-ong",
          title: t("menu.industries.smeTitle"),
        },
        {
          label: t("menu.industries.public"),
          href: "/industries/collectivites",
          title: t("menu.industries.publicTitle"),
        },
      ],
    },
    {
      id: "about",
      label: t("menu.about.label"),
      items: [
        {
          label: t("menu.about.story"),
          href: "/a-propos/histoire",
          title: t("menu.about.storyTitle"),
        },
        {
          label: t("menu.about.team"),
          href: "/a-propos/equipe",
          title: t("menu.about.teamTitle"),
        },
        {
          label: t("menu.about.blog"),
          href: "/a-propos/ressources",
          title: t("menu.about.blogTitle"),
        },
        {
          label: t("menu.about.contact"),
          href: "/a-propos/contact",
          title: t("menu.about.contactTitle"),
        },
      ],
    },
  ];

  return (
    <header className="fixed w-full top-10 left-1/2 transform-[translateX(-50%)] z-50 bg-white/75 backdrop-blur border border-gray-200 shadow-sm max-w-7xl mx-auto rounded-[100px]">
      <nav className=" mx-auto px-5">
        <div className="flex items-center justify-between">
          <div className="flex gap-6 items-center h-14">
            <Link
              to="/"
              title="MediWork — Accueil"
              className="inline-flex items-center"
            >
              <img
                src="../images/mediwork.svg"
                alt="MediWork"
                className="w-[145px]"
              />
            </Link>

            {/* Left group */}
            <div className="hidden md:flex items-center gap-8">
              {groups.slice(0, 5).map((g) => (
                <Dropdown
                  key={g.id}
                  group={g}
                  open={open === g.id}
                  setOpen={(v) => setOpen(v ? g.id : null)}
                />
              ))}

             
            </div>
            
          </div>
          {/* Right group */}

          <div>
            <div className="hidden md:flex items-center justify-end gap-8">
              <LanguageSwitcher />

              
            </div>
            
        

            {/* Mobile */}
            <div className="md:hidden flex items-center justify-end">
              <button
                aria-label="Ouvrir le menu"
                onClick={() => setMobileOpen(true)}
                className="p-2"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed inset-y-0 top-0 right-0 h-[100vh] w-80 bg-white border-l border-slate-200 shadow-2xl p-4 overflow-y-auto"
            aria-label="Menu mobile"
          >
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="inline-flex items-center"
                onClick={() => setMobileOpen(false)}
              >
                <img
                src="../images/mediwork.svg"
                alt="MediWork"
                className="w-[145px]"
              />
              </Link>
              <button
                aria-label="Fermer le menu"
                onClick={() => setMobileOpen(false)}
                className="p-2"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-4 space-y-4">
              {groups.map((g) => (
                <details
                  key={g.id}
                  className="group border-b border-slate-200 pb-2"
                >
                  <summary className="flex items-center justify-between py-2 cursor-pointer">
                    <span className="font-semibold text-slate-900">
                      {g.label}
                    </span>
                    <ChevronDown className="h-5 w-5 text-slate-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <ul className="mt-2 space-y-2">
                    {g.items.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          title={item.title}
                          className="block px-2 py-1 text-slate-700 hover:text-slate-900"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}

function Dropdown({
  group,
  open,
  setOpen,
  right,
}: {
  group: MenuGroup;
  open: boolean;
  setOpen: (v: boolean) => void;
  right?: boolean;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900 font-medium"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span>{group.label}</span>
        <ChevronDown className="h-4 w-4" aria-hidden />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className={`absolute mt-2 min-w-[220px] ${
              right ? "right-0" : "left-0"
            }`}
            role="menu"
          >
            <div className="rounded-xl border border-slate-200 bg-white shadow-lg ring-1 ring-black/5 p-2">
              {group.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  title={item.title}
                  className="block px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  role="menuitem"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
