fetch("../json/vagas.json")
.then(r => r.json())
.then(({ Vagas }) => {
    for(var i = 0; i < Vagas.length; i++){

        document.getElementsByClassName("row").innerHTML = `

            <div class="col-md-3 col-sm-3 col-xs-12 card-main-section">
                <div class="row card-part">
                    <div class="col-md-12 col-sm-12 col-xs-12 card-title">
                        <h1 id="titulo-vaga">Analista de dados</h1>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12 card-description">
                        <p>Interpretar dados, analisar resultados e utilizar técnicas estatísticas. Desenvolver e implementar análises de dados, sistemas de coleta de dados e outras estratégias que otimizem a eficiência e a qualidade estatística.
                        </p>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12 card-cart">
                        <a href="#" class="btn btn-info">Ver detalhes</a>
                    </div>
                </div>
            </div>
        `;
    }
});
