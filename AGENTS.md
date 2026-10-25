# Website Agent Rules

- The website must remain fully static.
- Do not add SSR adapters, API routes, Cloudflare Pages Functions, databases, authentication, analytics, or tracking scripts.
- Do not add React unless a task explicitly requires client-side interaction.
- Product data belongs in `src/content/projects`; updates belong in `src/content/updates`.
- Social links belong in `src/data/social.ts`.
- Every public page must include title, description, canonical URL, and Open Graph metadata via `BaseLayout.astro`.
- Never commit secrets, private roadmap information, or unverified public claims.
- All changes must pass `pnpm build`.

## Petauron 团队：Issue 跟踪与完成标准（MVP）

- 开发每项已获授权的功能或缺陷修复前，先查找并关联对应仓库的现有 issue；没有合适的 issue 时先创建，简要写明用户目标、最小范围和完成标准。不要重复创建，也不要把创建 issue 当作扩大实现或部署授权。
- 一项完整需求或缺陷使用一个主 issue 持续跟踪；开发、修复、CI、合并、发布、部署和验收复用它，不为每个操作、重试或版本单独建 issue。跨仓库工作优先在主 issue 关联各仓库 PR，只有可独立交付的问题才拆分 issue。
- PR 必须关联主 issue，并将 PR 链接、关键 CI 结果、发布版本及链接、适用的部署和验收结果回填到同一 issue。记录简洁、真实且可核验；未执行、失败、阻塞和尚未完成的步骤明确标注，不记录凭据、完整订阅链接或私有环境敏感信息。
- 只有约定范围实际完成且有相应验收证据后才关闭 issue。CI 通过、PR 合并或源码发布不自动代表部署及用户功能验收完成；范围包含部署或实测时，完成前保持 issue 开放，PR 使用关联引用而非会导致提前关闭的自动关闭关键词。
- 按 MVP 保持最小记录，不增加形式化审批、重复报告或额外测试要求。仅涉及代码或文档的任务，按其已约定完成标准关闭，不强加无关的发布或生产验收；所有操作仍遵循用户授权和现有 CI、安全规范。
