import { table, minifyRecords } from './utils/airtable';

export default async (req, res) => {
    try {
        const records = await table.select({}).firstPage();
        const minifiedRecords = minifyRecords(records);
        res.status(200).json(minifiedRecords);
    } catch {
        res.status(500).json({msg: 'rip something went wrong'});
    }
}