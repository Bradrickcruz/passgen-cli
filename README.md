# Password Generator CLI: Gerador de Senhas

O passgen-cli (psg) é uma ferramenta de linha de comando (CLI) para gerar senhas fortes e seguras, adaptável à quantidade de caracteres desejada.
Ideal para desenvolvedores e usuários que precisam de um gerador rápido e simples diretamente no terminal.

---

## Características

- Geração de senhas fortes com comprimento customizável.
- Opções simples e intuitivas para o usuário.
- Implementado com **TypeScript** para maior confiabilidade e escalabilidade.
- Construído com o **Bun**, garantindo maior performance e eficiência.

---

## Instalação

### Pré-requisitos:

Certifique-se de ter o Bun (https://bun.sh) instalado na sua máquina.
Se necessário, instale-o com o comando:

```bash
curl -fsSL https://bun.sh/install | bash
```

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

### Gerar uma senha com uma quantidade específica de caracteres

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

### Usar o comando explícito generate

```bash
psg generate <número>
```

Exemplo:

```bash
psg generate 22
```

#### Opções adicionais no comando generate

Você pode personalizar as características da senha gerada com as seguintes opções:

- `-nn, --no-numbers`: Remove números da senha.
- `-ns, --no-symbols`: Remove símbolos da senha.
- `-nu, --no-uppercase`: Remove letras maiúsculas da senha.

Exemplo:
Gerar uma senha de 12 caracteres sem números nem símbolos:

```bash
psg generate 12 -nn -ns
```

### Exibir a ajuda

```bash
psg --help
```

---

## TODO

- [ ] Implementar testes unitários para garantir a qualidade e robustez do projeto.
- [ ] Adicionar um comando para validar a força de senhas fornecidas pelo usuário.
- [ ] Adicionar histórico de senhas geradas.

---

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
