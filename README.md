<div align="center">

# InclusivaMente Matemática

### Aplicação de Computação Gráfica no Ensino de Matemática Básica para Alunos Neurodivergentes em Ambiente Interativo 3D

[![Three.js](https://img.shields.io/badge/Three.js-3D-black?style=for-the-badge\&logo=three.js)](https://threejs.org/)
[![WebGL](https://img.shields.io/badge/WebGL-Graphics-red?style=for-the-badge)](https://www.khronos.org/webgl/)
[![Vercel](https://img.shields.io/badge/Vercel-Deploy-black?style=for-the-badge\&logo=vercel)](https://vercel.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge\&logo=javascript)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

</div>

---

## Aplicação de Computação Gráfica no Ensino de Matemática Básica para Alunos Neurodivergentes em Ambiente Interativo 3D

### Universidade Federal do Ceará – Campus Sobral

Curso: Engenharia da Computação
Disciplina: Computação Gráfica (2026.1)
Professor: Dr. Iális Cavalcante de Paula Junior
Trabalho Prático 1 – Desenvolvimento de Soluções 3D Interativas (Demo Day)

---

# 1. Visão Geral do Projeto

O projeto InclusivaMente Matemática consiste em uma plataforma educacional interativa em ambiente tridimensional desenvolvida com tecnologias de Computação Gráfica para auxiliar o ensino de matemática básica para alunos neurodivergentes.

A proposta busca transformar conteúdos matemáticos abstratos em experiências visuais, manipuláveis e acessíveis, utilizando recursos gráficos tridimensionais, iluminação realista, interatividade e objetos pedagógicos digitais.

A aplicação foi desenvolvida utilizando WebGL com Three.js, permitindo que o usuário interaja diretamente com elementos 3D voltados ao ensino de:

* Números e contagem
* Unidade, dezena e centena
* Soma e subtração
* Multiplicação
* Divisão
* Geometria espacial
* Relações entre formas planas e sólidos geométricos

O sistema prioriza clareza visual, acessibilidade, estímulos visuais controlados e aprendizado interativo.

---

# 2. Objetivo do Projeto

O principal objetivo do projeto é utilizar Computação Gráfica como ferramenta educacional para facilitar a compreensão de conceitos matemáticos fundamentais através de ambientes tridimensionais interativos.

Além do aspecto técnico, o projeto também possui uma finalidade social e educacional, considerando as dificuldades enfrentadas por alunos neurodivergentes em métodos tradicionais de ensino.

A proposta busca:

* Estimular o aprendizado visual e espacial
* Tornar conceitos matemáticos mais concretos
* Promover acessibilidade educacional
* Utilizar interação direta como apoio pedagógico
* Explorar recursos modernos de renderização gráfica em ambiente web

---

# 3. Link do Projeto

## Acesse a aplicação

🔗 [https://inclusivamente-matematica.vercel.app/](https://inclusivamente-matematica.vercel.app/)

---

# 4. Tecnologias Utilizadas

## Stack Principal

## Computação Gráfica

* WebGL
* Three.js
* Blender
* GLTF/GLB

## Desenvolvimento Web

* HTML5
* CSS3
* JavaScript
* Vite

## Recursos Gráficos

* OrbitControls
* Raycasting
* Materiais PBR
* Sombras dinâmicas
* Iluminação composta
* Modelos 3D externos

## Hospedagem

* Vercel

---

# 5. Requisitos Técnicos Atendidos

O projeto foi desenvolvido seguindo os requisitos estabelecidos para o trabalho da disciplina.

## 5.1 Importação de Geometrias Complexas

Foram utilizados modelos 3D externos no formato .glb/.gltf para representar:

* Ábaco
* Material dourado
* Formas geométricas
* Elementos pedagógicos interativos

Todos os modelos passaram por ajustes e otimizações no Blender antes da integração ao ambiente.

## 5.2 Iluminação Composta

A aplicação utiliza um sistema de iluminação baseado em:

* AmbientLight
* DirectionalLight
* Sombras dinâmicas
* Configuração de profundidade e projeção de sombras

Isso proporciona maior percepção espacial e melhora a experiência visual do usuário.

## 5.3 Materiais e Texturas

Foram utilizados materiais texturizados e materiais baseados em física para aumentar a qualidade visual do ambiente.

O projeto também utiliza:

* Cores acessíveis
* Contraste adequado
* Elementos visuais educativos
* Texturas pedagógicas

## 5.4 Interatividade

A aplicação implementa diversos mecanismos de interação:

* Movimentação de câmera com OrbitControls
* Seleção de objetos
* Arrastar elementos
* Interação por clique
* Manipulação de objetos matemáticos
* Visualização dinâmica das operações

---

# 6. Problema Abordado

O ensino tradicional de matemática frequentemente apresenta dificuldades para alunos neurodivergentes devido à alta abstração dos conteúdos e à baixa utilização de recursos visuais interativos.

Muitos estudantes apresentam melhor desempenho quando conseguem visualizar, manipular e experimentar conceitos matemáticos de maneira concreta.

Diante disso, o projeto propõe um ambiente tridimensional acessível que transforma conteúdos matemáticos em experiências visuais e interativas.

---

# 7. Solução Desenvolvida

O InclusivaMente Matemática foi projetado como uma plataforma visual de apoio educacional baseada em Computação Gráfica.

Cada módulo do sistema representa um conteúdo matemático específico utilizando objetos tridimensionais interativos.

O ambiente permite:

* Exploração livre do espaço 3D
* Manipulação de elementos matemáticos
* Associação entre números e objetos físicos
* Aprendizado por observação visual
* Interação direta com conteúdos pedagógicos

A solução combina educação, acessibilidade e tecnologia gráfica em uma única experiência.

---

# 8. Estrutura do Projeto

O sistema foi dividido em módulos educacionais independentes.

## 8.1 Ábaco Interativo

Módulo responsável pelo ensino de números e contagem básica.

Funcionalidades:

* Representação visual de números
* Manipulação das peças do ábaco
* Associação entre quantidade e valor numérico
* Interação direta com os elementos

Recursos gráficos:

* Modelo 3D do ábaco
* Iluminação dinâmica
* Sombras ativas
* Materiais texturizados

---

## 8.2 Material Dourado

Módulo destinado ao ensino de:

* Unidade
* Dezena
* Centena

Elementos utilizados:

* Cubos
* Barras
* Placas

O sistema permite visualizar operações matemáticas utilizando representação física dos valores.

---

## 8.3 Soma e Subtração

Módulo voltado ao ensino de operações básicas.

Recursos implementados:

* Quadro interativo
* Sistema visual para “pedir emprestado”
* Arrastar valores
* Organização visual dos cálculos
* Espaços de resultado

Objetivo:

Facilitar a compreensão lógica das operações através de manipulação visual.

---

## 8.4 Multiplicação

Módulo que utiliza elementos gráficos e mudança de cores para representar agrupamentos e multiplicação.

Características:

* Apoio visual pedagógico
* Representação por agrupamentos
* Destaque visual das quantidades
* Interação simples e intuitiva

---

## 8.5 Divisão

Módulo interativo baseado em separação de elementos.

Recursos:

* Distribuição de objetos
* Manipulação de quantidades
* Separação visual de grupos
* Área reservada para resto da divisão

A proposta permite compreender a divisão de maneira concreta.

---

## 8.6 Geometria Espacial

Módulo voltado ao ensino de formas geométricas.

Conteúdos abordados:

* Faces
* Arestas
* Vértices
* Planificação
* Relação entre 2D e 3D

Formas implementadas:

* Cubo
* Esfera
* Cone
* Cilindro
* Pirâmide
* Paralelepípedo

Os objetos podem ser visualizados espacialmente para auxiliar no desenvolvimento da percepção geométrica.

---

# 9. Interatividade e Experiência do Usuário

A experiência do usuário foi desenvolvida priorizando simplicidade, clareza e acessibilidade.

Principais recursos:

* Navegação livre com OrbitControls
* Limitação de movimentos excessivos da câmera
* Interface organizada por módulos
* Interações por clique
* Arrastar objetos
* Seleção visual de elementos
* Cores suaves e acessíveis
* Organização pedagógica dos conteúdos

A proposta visual busca evitar excesso de estímulos e reduzir confusão durante o uso.

---

# 10. Arquitetura Técnica

O sistema foi estruturado utilizando uma arquitetura modular.

## Fluxo Geral

1. Inicialização do renderer WebGL
2. Criação da cena 3D
3. Configuração da câmera
4. Configuração da iluminação
5. Importação dos modelos 3D
6. Aplicação de materiais e texturas
7. Configuração de interatividade
8. Loop de renderização

## Recursos Técnicos Implementados

* Renderização em tempo real
* Carregamento de modelos GLTF/GLB
* Controle de câmera
* Sistema de iluminação dinâmica
* Sombras em tempo real
* Raycasting para interações
* Estrutura modular por conteúdo

---

# 11. Acessibilidade e Inclusão

O projeto foi pensado considerando características importantes para estudantes neurodivergentes.

Foram adotadas estratégias como:

* Uso de cores suaves
* Redução de poluição visual
* Organização clara das informações
* Elementos visuais grandes
* Interações simples
* Aprendizado baseado em manipulação
* Feedback visual direto

O objetivo é tornar o ambiente confortável, intuitivo e educativo.

---

# 12. Organização da Equipe

## Ricardo

Responsável pelo módulo do ábaco, iluminação, cena 3D e organização dos modelos.

## Débora

Responsável pelo material dourado, modelagem e recursos visuais relacionados.

## Martins

Responsável pelo módulo de soma e subtração.

## Diana e Vitória

Responsáveis pelos módulos de multiplicação, divisão, interatividade e experiência do usuário.

## Gustavo

Responsável pelo módulo de geometria espacial.

## Diana, Vitória e Agapito

Responsáveis pela documentação, README, organização do GitHub e apresentação do projeto.

---

# 13. Cronograma de Desenvolvimento

## Etapa 1 – Planejamento

* Definição da ideia
* Divisão das tarefas
* Estrutura inicial do projeto

## Etapa 2 – Base do Projeto

* Criação da cena
* Configuração da câmera
* Configuração do renderer

## Etapa 3 – Parte Gráfica

* Modelagem
* Importação de objetos
* Iluminação
* Materiais
* Texturas

## Etapa 4 – Interatividade

* Raycasting
* Movimentação
* Seleção de objetos
* Lógica das operações

## Etapa 5 – Finalização

* Ajustes visuais
* Correção de bugs
* Otimizações
* Preparação da apresentação

---

# 14. Resultados Obtidos

O projeto conseguiu integrar recursos avançados de Computação Gráfica com uma proposta educacional acessível.

Entre os principais resultados alcançados:

* Ambiente 3D funcional
* Interatividade completa
* Implementação de iluminação e sombras
* Modelos tridimensionais integrados
* Aplicação prática de conceitos de WebGL
* Organização modular dos conteúdos
* Aplicação educacional com impacto social

---

# 15. Considerações Finais

O InclusivaMente Matemática demonstra como a Computação Gráfica pode ser utilizada além do entretenimento, atuando também como ferramenta de inclusão e apoio educacional.

O projeto permitiu aplicar conceitos técnicos da disciplina em um contexto prático e socialmente relevante, envolvendo:

* Renderização 3D
* Iluminação
* Materiais
* Texturas
* Interatividade
* Organização visual
* Experiência do usuário

Além do aprendizado técnico, o desenvolvimento também proporcionou experiência em:

* Trabalho em equipe
* Organização modular
* Planejamento de software
* Desenvolvimento colaborativo
* Aplicação de tecnologia em educação

---

# 16. Repositório e Disponibilização

Projeto disponível em:

[https://inclusivamente-matematica.vercel.app/](https://inclusivamente-matematica.vercel.app/)

---

# 17. Apresentação Visual do Projeto
<img width="1902" height="1076" alt="Captura de tela 2026-05-25 105459" src="https://github.com/user-attachments/assets/1bcb926e-3ad7-41a5-9d1a-02a2477a9e8c" />
<img width="1901" height="1079" alt="Captura de tela 2026-05-25 105517" src="https://github.com/user-attachments/assets/3f9d7962-5d19-4200-adc0-10b8753b2819" />
<img width="1902" height="1079" alt="Captura de tela 2026-05-25 105527" src="https://github.com/user-attachments/assets/7db57171-ea16-4b7e-a159-a1f90ed8051b" />
<img width="1904" height="1078" alt="Captura de tela 2026-05-25 105538" src="https://github.com/user-attachments/assets/6334ac39-c3d3-43ed-b248-4c20b0583b22" />
<img width="1902" height="1077" alt="Captura de tela 2026-05-25 105545" src="https://github.com/user-attachments/assets/733f69c4-f02b-4af7-9c6d-ccd33ff25c2f" />
<img width="1903" height="1003" alt="Captura de tela 2026-05-25 105553" src="https://github.com/user-attachments/assets/b2055f6e-0cd7-4a94-9259-56f4f528850a" />
<img width="1902" height="1078" alt="Captura de tela 2026-05-25 105600" src="https://github.com/user-attachments/assets/91412fe6-1160-4f4f-abbd-c6bfdd792b95" />
<img width="1901" height="1079" alt="Captura de tela 2026-05-25 105606" src="https://github.com/user-attachments/assets/252d8f0a-ad44-41b3-9c45-2fab1a7b9974" />
<img width="1916" height="1075" alt="Captura de tela 2026-05-25 105633" src="https://github.com/user-attachments/assets/dea6ebcb-7456-4a5a-8663-96d7ae29a822" />
<img width="1917" height="1075" alt="Captura de tela 2026-05-25 105655" src="https://github.com/user-attachments/assets/3ca0c5e3-e05d-4cd6-ab3c-3ddf61eab0f6" />
<img width="1915" height="940" alt="Captura de tela 2026-05-25 105719" src="https://github.com/user-attachments/assets/4c8a8f4b-35c7-45a2-a7be-d5b2aa6f6a75" />
<img width="1910" height="940" alt="Captura de tela 2026-05-25 105757" src="https://github.com/user-attachments/assets/ffb92b35-c389-4b18-b2bb-9a150afc4809" />
<img width="1916" height="945" alt="Captura de tela 2026-05-25 105836" src="https://github.com/user-attachments/assets/7757d7ac-b0d6-4fb2-9ad9-256fc20902c4" />
<img width="1916" height="937" alt="Captura de tela 2026-05-25 105909" src="https://github.com/user-attachments/assets/f4bdede0-3bde-4100-88b0-7c0ae6b1bb24" />
<img width="1917" height="941" alt="Captura de tela 2026-05-25 105922" src="https://github.com/user-attachments/assets/6ed30104-4759-428c-8f92-85f20bb24e24" />
<img width="1919" height="945" alt="Captura de tela 2026-05-25 105930" src="https://github.com/user-attachments/assets/5c4dab1d-1dc4-4b7c-ad8a-6c49ab680ed9" />

# 18. Conclusão

O projeto atingiu os objetivos propostos pela disciplina ao desenvolver uma solução 3D interativa utilizando Computação Gráfica como núcleo tecnológico principal.

A aplicação demonstra o potencial da integração entre tecnologia, acessibilidade e educação, oferecendo uma experiência visual e interativa voltada ao ensino de matemática básica para alunos neurodivergentes.

O InclusivaMente Matemática representa uma aplicação prática dos conceitos estudados durante a disciplina, com foco em impacto educacional, qualidade gráfica e interatividade.
