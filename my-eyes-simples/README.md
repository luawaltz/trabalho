# My Eyes - versão simples para atividade inicial

Aplicativo de rotina do pet feito com Expo, React Native e TypeScript.

## Funções
- Cadastrar atividade com título, descrição e prioridade.
- Validar campos obrigatórios.
- Mostrar registros usando FlatList.
- Marcar atividade como concluída ou pendente.
- Excluir atividade com confirmação.

Os dados ficam apenas na memória e desaparecem quando o aplicativo é encerrado.

## Como executar
1. Instale Node.js (versão LTS).
2. Abra esta pasta no VS Code.
3. No terminal, execute `npm install`.
4. Execute `npx expo start`.

## Arquivos principais
- `app/index.tsx`: tela principal, useState e FlatList.
- `src/types/Activity.tsx`: tipo TypeScript do registro.
- `src/components/ActivityForm.tsx`: formulário personalizado.
- `src/components/ActivityItem.tsx`: item personalizado da lista.
