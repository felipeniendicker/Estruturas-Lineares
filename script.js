
        async function treinarEPrever() {

            // Pegando elementos da tela
            const textoStatus = document.getElementById("status");
            const textoResultado = document.getElementById("resultado");

            // Pegando valor digitado pelo usuário
            const quantidadeDigitada = Number(document.getElementById("quantidade").value);

            if (!Number.isFinite(quantidadeDigitada) || quantidadeDigitada < 0) {
                textoStatus.innerText = "Status: Informe uma quantidade válida.";
                textoResultado.innerText = "";
                return;
            }

            textoStatus.innerText = "Status: Treinando a IA...";

            // =========================
            // 1. CRIAR O MODELO (neurônio)
            // =========================
            const modelo = tf.sequential();
            modelo.add(tf.layers.dense({
                units: 1,
                inputShape: [1]
            }));

            // =========================
            // 2. COMPILAR O MODELO
            // =========================
            modelo.compile({
                loss: 'meanSquaredError',
                optimizer: 'sgd'
            });

            // =========================
            // 3. DADOS DE TREINO
            // X = quantidade de itens
            // Y = preço total
            // =========================
            const dadosEntrada = tf.tensor2d([1, 2, 3, 4, 5, 6], [6, 1]);
            const dadosSaida = tf.tensor2d([10, 20, 30, 40, 50, 60], [6, 1]);

            // =========================
            // 4. TREINAMENTO
            // A IA aprende com os dados
            // =========================
            await modelo.fit(dadosEntrada, dadosSaida, {
                epochs: 200
            });

            textoStatus.innerText = "Status: IA treinada!";

            // =========================
            // 5. PREVISÃO
            // =========================
            const previsao = modelo.predict(
                tf.tensor2d([quantidadeDigitada], [1, 1])
            );

            // Convertendo resultado para número
            const valorPrevisto = previsao.dataSync()[0];

            // Mostrando resultado na tela
            textoResultado.innerText =
                "Preço previsto: R$ " + valorPrevisto.toFixed(2);
        }
    