const { useState } = React;
const rootElement = document.getElementById('app');

function App() {
    const [inputValue, setInputValue] = useState('');
    const [inputAlcohol, setInputAlcohol] = useState('beer');
    const [outputAlcohol, setOutputAlcohol] = useState('vodka');

    const alcoholTypes = {
        beer: 4.7,
        vodka: 40,
        wine: 12,
        whiskey: 43,
        brandy: 40,
    };

    const convertAlcohol = () => {
        if (!inputValue) return 0;

        const inputStrength = alcoholTypes[inputAlcohol];
        const outputStrength = alcoholTypes[outputAlcohol];

        const inputGrams = (Number(inputValue) * 1000 * inputStrength) / 100;  // Граммы чистого алкоголя
        const outputLiters = inputGrams / ((outputStrength / 100) * 1000);  // Литры целевого напитка

        return outputLiters.toFixed(2);  // Округляем до двух знаков
    };

    return (
        <>
            <div className='container'>
                <h1>Конвертер алкоголя</h1>

                <div className='converter'>
                    <div className='input-block'>
                        <label htmlFor="inputAlcohol">Выберите исходный алкоголь:</label>
                        <select
                            id="inputAlcohol"
                            value={inputAlcohol}
                            onChange={(event) => setInputAlcohol(event.target.value)}>
                            <option value="beer">Пиво</option>
                            <option value="vodka">Водка</option>
                            <option value="wine">Вино</option>
                            <option value="whiskey">Виски</option>
                            <option value="brandy">Коньяк</option>
                        </select>

                        <input
                            className='input-field'
                            placeholder='Введите количество в литрах'
                            type="text"
                            value={inputValue}
                            onChange={(event) => setInputValue(event.target.value)}
                        />
                    </div>

                    <div className='output-block'>
                        <label htmlFor="outputAlcohol">Преобразовать в:</label>
                        <select
                            id="outputAlcohol"
                            value={outputAlcohol}
                            onChange={(event) => setOutputAlcohol(event.target.value)}>
                            <option value="beer">Пиво</option>
                            <option value="vodka">Водка</option>
                            <option value="wine">Вино</option>
                            <option value="whiskey">Виски</option>
                            <option value="brandy">Коньяк</option>
                        </select>

                        <h2>Эквивалент: {convertAlcohol()} литров {outputAlcohol === 'beer' ? 'пива' : outputAlcohol === 'vodka' ? 'водки' : outputAlcohol === 'wine' ? 'вина' : outputAlcohol === 'whiskey' ? 'виски' : 'коньяка'}</h2>
                    </div>
                </div>
            </div>

            
        </>
    );
}

ReactDOM.createRoot(rootElement).render(<App />);
