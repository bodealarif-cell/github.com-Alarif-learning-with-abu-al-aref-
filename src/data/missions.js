export const missions = [
  {
    id: 1,
    phase: 1,
    title: 'المهمة ١: هيكل صفحة HTML',
    description: 'في هذه المهمة ستتعرف على الهيكل الأساسي لأي صفحة HTML، والوسوم <!DOCTYPE>، <html>، <head>، <body>.',
    snippets: [
      { id: 's1', label: 'إعلان نوع المستند', code: '<!DOCTYPE html>\n' },
      { id: 's2', label: 'فتح وسم html', code: '<html dir="rtl">\n' },
      { id: 's3', label: 'وسم الرأس', code: '<head>\n  <meta charset="UTF-8">\n  <title>صفحتي</title>\n</head>\n' },
      { id: 's4', label: 'وسم الجسم', code: '<body>\n  \n</body>\n' },
      { id: 's5', label: 'إغلاق html', code: '</html>' },
    ],
    initialCode: '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>صفحتي</title>\n</head>\n<body>\n  \n</body>\n</html>',
  },
  // يمكنك إضافة المزيد من المهام بنفس النمط. سأعطي مثالاً للمهمة 30:
  {
    id: 30,
    phase: 4,
    title: 'المهمة ٣٠: مشروع رمضان التفاعلي',
    description: 'هنا ستبني صفحة تعرض "عبدالوهاب بيقولك رمضان كريم" وعند النقر على النص يظهر هلال متلألئ.',
    snippets: [
      { id: 's30_1', label: 'استيراد المكتبات', code: 'import { Moon } from "lucide-react";\nimport { motion } from "framer-motion";' },
      { id: 's30_2', label: 'مكون الهلال', code: 'const Crescent = () => {\n  const [show, setShow] = useState(false);\n  return (\n    <div className="text-center p-8">\n      <h1\n        className="text-3xl cursor-pointer text-amber-300"\n        onClick={() => setShow(!show)}\n      >\n        عبدالوهاب بيقولك رمضان كريم\n      </h1>\n      <motion.div\n        initial={{ opacity: 0 }}\n        animate={{ opacity: show ? 1 : 0 }}\n        transition={{ duration: 1 }}\n      >\n        <Moon className="w-16 h-16 mx-auto mt-4 text-yellow-400" />\n      </motion.div>\n    </div>\n  );\n};' },
      { id: 's30_3', label: 'التصدير', code: 'export default Crescent;' },
    ],
    initialCode: 'import { useState } from "react";\nimport { Moon } from "lucide-react";\nimport { motion } from "framer-motion";\n\nexport default function App() {\n  const [show, setShow] = useState(false);\n  return (\n    <div className="p-8 text-center">\n      <h1\n        className="text-2xl cursor-pointer text-amber-300"\n        onClick={() => setShow(!show)}\n      >\n        عبدالوهاب بيقولك رمضان كريم\n      </h1>\n      <motion.div\n        initial={{ opacity: 0 }}\n        animate={{ opacity: show ? 1 : 0 }}\n        transition={{ duration: 1 }}\n      >\n        <Moon className="w-16 h-16 mx-auto mt-4 text-yellow-400" />\n      </motion.div>\n    </div>\n  );\n}',
  },
];
