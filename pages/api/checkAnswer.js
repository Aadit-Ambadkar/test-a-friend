import { table, minifyRecords } from './utils/airtable';

export default async (req, res) => {
    try {
        const records = await table.select({}).firstPage();
        const minifiedRecords = minifyRecords(records);

        let found = await minifiedRecords.find(function (element) {
            return element["id"] === req.body['id'];
        });
        if (found === undefined) {
            res.status(404).json({dne: true});
            return;
        }
        res.status(200).json({correct: found["fields"]["answer"]==req.body['answer']});
    } catch {
        res.status(500).json({msg: 'rip something went wrong'});
    }
}