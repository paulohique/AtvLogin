
# README - Login com Google utilizando Firebase e Expo

## Descrição do Projeto
Este projeto consiste em uma tela de login para um aplicativo React Native, utilizando autenticação com Google através do Firebase e Expo. A tela de login exibe um botão para o usuário entrar com sua conta Google e, após o login bem-sucedido, exibe uma mensagem de boas-vindas com o nome do usuário.

## Funcionalidade
- O aplicativo utiliza a biblioteca `expo-auth-session` para iniciar o processo de autenticação com Google.
- O método `Google.useAuthRequest` é utilizado para configurar a requisição de autenticação, permitindo que o usuário se autentique com sua conta Google.
- Após a autenticação bem-sucedida, um token é obtido e convertido em um objeto `credential`, que é utilizado para fazer login no Firebase com a função `signInWithCredential`.
- Se o login for bem-sucedido, o nome do usuário é exibido na tela, e ele pode continuar usando o aplicativo.

## Como Funciona
1. **Tela Inicial:**
   - A tela exibe um botão de login com o Google.
   - Quando o botão é pressionado, o processo de autenticação é iniciado e o usuário escolhe a conta Google desejada.
   
2. **Autenticação:**
   - Após o usuário se autenticar, o aplicativo recebe um `id_token` que é utilizado para gerar um `credential` para autenticação no Firebase.
   - Se o login for bem-sucedido, o nome do usuário é exibido na tela de boas-vindas.

3. **Estado de Login:**
   - Quando o usuário estiver logado, o aplicativo mostra a mensagem "Bem-vindo" seguida do nome do usuário.
   - Caso contrário, o botão "Entrar com Google" é mostrado para que o usuário possa realizar o login.

## Critérios de Avaliação

1. **Funcionalidade Correta do Método de Autenticação Escolhido:**
   - O método de autenticação com Google foi implementado de forma eficaz utilizando o Firebase e a biblioteca Expo.
   - A autenticação ocorre corretamente, e o fluxo de login exibe o nome do usuário após a autenticação bem-sucedida, conforme esperado.

2. **Segurança na Implementação:**
   - A comunicação com o Firebase é segura, pois utiliza credenciais temporárias (id_token) obtidas diretamente do Google, reduzindo o risco de exposição de dados sensíveis.
   - O uso do `GoogleAuthProvider.credential` assegura que o token seja validado pelo Firebase antes de conceder acesso ao sistema.

3. **Usabilidade e Experiência do Usuário:**
   - O botão de login com Google é claro e de fácil acesso, oferecendo uma experiência fluída e intuitiva para o usuário.
   - Após o login, o nome do usuário é apresentado de forma clara, proporcionando uma boa interação visual e uma transição suave entre os estados de login.

4. **Documentação Clara sobre a Implementação:**
   - O código está bem estruturado e a lógica de autenticação está claramente documentada, detalhando como a autenticação ocorre e como os dados do usuário são gerenciados.
   - A explicação sobre as tecnologias utilizadas (Firebase, Expo, Google Auth) e como elas se integram no fluxo de autenticação também está claramente descrita.

5. **Riscos Mitigados:**
   - O risco de exposição de credenciais sensíveis foi mitigado ao utilizar o `id_token` gerado pela autenticação Google, que é válido apenas para a sessão atual.
   - Não há armazenamento de dados sensíveis no dispositivo, e a comunicação é feita de forma segura.

## Prints de Testes Realizados
Os prints a seguir demonstram o processo de autenticação:

1. **Tela de Seleção de Conta Google:**  
   ![image](https://github.com/user-attachments/assets/918c04b2-27ce-4fde-9496-e01edfd2d769)



2. **Tela de Sucesso ao Logar:**  
  ![image](https://github.com/user-attachments/assets/2ca8855c-622d-4271-9b27-e6779781651a)


3. **Tela Inicial com o Botão de Login:**  
   ![image](https://github.com/user-attachments/assets/50e73fc0-3a45-449b-b897-db71588d13d3)


## Conclusão
Este projeto implementa uma funcionalidade de login com Google utilizando as bibliotecas Expo e Firebase de forma eficiente e segura. A experiência do usuário é fluída,






