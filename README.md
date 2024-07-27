# :D

A coisa vai encrespar.

[Preces](https://github.com/augustooomoraes/pp-preces/tree/287c950088e1086c54f952a9fa24b8863daff68c), ao menos enquanto escrevia isto, pretendia portar a base de dados das orações todas. O princípio desta empreitada organizacional se deu agora no `src/app/consagracao-completa/data.json`.

A tipagem toda vai ser um pouquinho complexa, e cheia de funções bem específicas para lidar com a edição dos textos.

Para já registrar a ideia:

- Nome da página, do arquivão.
  - `title`: String.
  - `index`: Array de objetos obrigatoriamente com `title` e `id` – correpondente ao da `session` referida – e, se tiver subitens, com outro `index`, no mesmo formato, e assim sucessivamente. Também opcional: `no-list-number`. Também opcional: `page-ref`.
    - `"id": 0`: Entrada do índice sem seção correspondente no arquivo. Deve ser raro, mas já neste primeiro acontedeu – no ***Magníficat***, nas **Orações da preparação para a consagração**.
    - `"no-list-number": true`: Também deve ser raro mas aconteceu aqui. Na mesma lista, em **ou Oração a Jesus, por Santo Agostinho**.
    - `"page-ref": integer`: Referência a ser acessada dentro de `contents` com as tags:
      - `<page id=integer>`, para mostrar o número da página referida.
      - `<ref id=integer text='text'>`, para mostrar um link para a seção referida.
      - Como os textos são diferentes para print e para screen
  - `session`: Array de objetos correspondentes aos objetos de primeiro nível do `index`.
    - 'id': Integer.
    - `title`: String.
    - `type`: Enum – aqui é que o negócio realmente começa a encrespar. Baseado neste atributo é que o valor de `content` será tratado.
      > - `regular-text`
      >   - `<paragraph>`: Além de rubricar e pesar, acrescenta "§ " antes e "." + tabulação depois.
      > - `gregorian-chant`
      >   - `não sei`: Não sei.
      > - `parallel-preces`: Os objetos do `content` poderão ter os seguintes `types`:
      >   - `paragraph`: Texto normal, sem tabulação automática.
      >   - `v`: ℣
      >     - Quando há vários versos seguidos, só o primeiro – no caso dos arquivos para impressão, o primeiro de cada página – é precedido pelo caracter especial.
      >       - Exceto quanto a ele segue um responso, ou quando o precede um verso com `"larger-break": true`.
      >   - `r`: ℟
      >   - `annotation`: Anotação, em fonte menor e itálica,
      >   - ``:
      >   - `não sei`: Não sei.
      >   - Comum a todos esses types:
      >     - `"larger-break": true`: Os pares verso-responso às vezes tem menos a ver uns com os outros – então a quebra de linha maior fica bem. Basta ver qualquer ladainha para reparar.  
      >       De toda forma, está liberado para qualquer dos `types`. Vai saber.
      >     - `"horizontal-line": "full" | "two-halves"`: Linhas de divisão.
      > - Comuns a todos os types
      >   - `\"`: Aspas duplas.
      >   - `\'`: Aspas simples (acho que convém *escapar* ambas).
      >   - `<*>`: Asterisco rubro.
      >   - `<i>`: Itálico.
      >   - `<u>`: Sublinhado.
      >   - `<b>`: Negrito.
      >   - `<br>`: Nova linha – a ideia é que seja como o shift + enter dos editores de texto normais.
      >   - `<footnote>`: Referência a nota de rodapé. Nem imagino o quão difícil será fazer isso... Sei que o markdown editor do GitHub tem essa função, e talvez seja bem do jeito que eu preciso.
      >     E esses `<footnotes>` podem aparecer noutros lugares, não só nos elementos do `content`.
    - `content`: Array de objetos.
      - `type`: Talvez parte do enum acima seria melhor referido aqui.
        > - `paragraph`
        > - `header-1`
        > - `header-2`
        > - `indication`
        > - `index`
        > - `não sei`
      - `content`:
        - String.
        - No caso do `"type": "index"`, array.
        - Também pode ser objeto com as keys `print-only` e `screen-only`.
  - `footnotes`: Array de objetos com `id`, que deve corresponder ao contido nos `<footnotes>`, e `content`, com o texto.
