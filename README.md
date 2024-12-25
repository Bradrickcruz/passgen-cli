# Password Generator CLI: Gerador de Senhas

O passgen-cli (psg) é uma ferramenta de linha de comando (CLI) para gerar senhas fortes e seguras, adaptável à quantidade de caracteres desejada.
Ideal para desenvolvedores e usuários que precisam de um gerador rápido e simples diretamente no terminal.

---

## Características

- Geração de senhas fortes com comprimento customizável.
- Opções simples e intuitivas para o usuário.
- Implementado com TypeScript para maior confiabilidade e escalabilidade.

---

## Instalação

### Pré-requisitos:

Certifique-se de ter o Node.js (versão 16 ou superior) instalado na sua máquina.

1. Clone o repositório:

    ```bash
    git clone https://github.com/Bradrickcruz/passgen-cli.git
    cd passgen-cli
    ```

2. Instale as dependências:

    ```bash
    bun i
    ```

3. Compile o código TypeScript:

    ```bash
    bun run build
    ```

4. Instale globalmente para uso como CLI:

    ```bash
    bun link
    ```

---

## Uso

Depois de instalar, você pode usar o passgen-cli diretamente no terminal.

1. Gerar uma senha com uma quantidade específica de caracteres:

    ```bash
    psg -l <número>
    ```

    Exemplo:

    ```bash
    psg -l 16
    ```

    Saída:

    ```bash
    R8$k1&PxZ4@dQc5!
    ```

2. Usar o comando explícito generate:

    ```bash
    psg generate <número>
    ```

    Exemplo:

    ```bash
    psg generate 22
    ```

3. Exibir a ajuda:

    ```bash
    psg --help
    ```

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
