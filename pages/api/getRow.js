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
        delete found["fields"]["answer"]
        res.status(200).json(found["fields"]);
    } catch {
        res.status(500).json({msg: 'rip something went wrong'});
    }
}