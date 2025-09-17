# Vobile MAX

## i18n

- [x] next-i18n
- [x] languine

## Prompt

- 如果要添加新的语言，需要：
  - 在 `lib/i18n/routing.ts` 的 `locales: ["en", "zh-CN", "zh-HK"]` 进行添加
  - 在 `languine.json` 的 `"targets": ["zh-CN", "zh-HK"]` 字段中进行添加
- 如果要添加新的文案，需要：
  - 在 `messages/en.json` 中进行添加，注意：**不需要修改/添加`messages`目录下其余的 json 文件**，这部分会交给 languine 进行自动化处理
