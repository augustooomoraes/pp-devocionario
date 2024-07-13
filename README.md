# :D

A coisa vai encrespar.

[Preces](https://github.com/augustooomoraes/pp-preces/tree/287c950088e1086c54f952a9fa24b8863daff68c), ao menos enquanto escrevia isto, pretendia portar a base de dados das orações todas. O princípio desta empreitada organizacional se deu agora no `src/app/consagracao-completa/data.json`.

A tipagem toda vai ser um pouquinho complexa, e cheia de funções bem específicas para lidar com a edição dos textos.

Para já registrar a ideia:

- Nome da página, do arquivão.
  - `title`: String.
  - `index`: Array de objetos obrigatoriamente com `title` e, se tiver subitens, com outro `index`, no mesmo formato, e assim sucessivamente.
  - `sessions`: Array de objetos correspondentes aos objetos de primeiro nível do `index`.
    - `title`: String.
    - `type`: Enum – aqui é que o negócio realmente começa a encrespar. Baseado neste atributo é que o valor de `content` será tratado.
      > - `regular-text`
      >   - `<paragraph>`: Além de rubricar e pesar, acrescenta "§ " antes e "." + tabulação depois.
      > - `gregorian-chant`
      >   - `não sei`: Não sei.
      > - `preces`
      >   - `não sei`: Não sei.
      > - Comuns a todos os types
      >   - `\"`: Aspas duplas.
      >   - `\'`: Aspas simples (acho que convém *escapar* ambas).
      >   - `<i>`: Itálico.
      >   - `<u>`: Sublinhado.
      >   - `<b>`: Negrito.
      >   - `<footnote>`: Referência a nota de rodapé. Nem imagino o quão difícil será fazer isso... Sei que o markdown editor do GitHub tem essa função, e talvez seja bem do jeito que eu preciso.
      >     E esses `<footnotes>` podem aparecer noutros lugares, não só nos elementos do `content`.
    - `content`: Array de objetos.
      - `type`: Talvez parte do enum acima seria melhor referido aqui.
        > - `paragraph`
        > - `title-1`
        > - `title-2`
        > - `não sei`
      - `content`: String.
  - `footnotes`: Array de strings, a princípio. Se os elementos estiverem na mesma ordem que os `<footnotes>` nos elementos do `content`, tudo bem; mas talvez seja melhor por, tantoo junto a estas strings como aos `<footnotes>`, um id, e compará-los para fazer os vínculos depois.
