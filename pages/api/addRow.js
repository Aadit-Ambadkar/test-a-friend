import { table, getMinifiedRecord } from './utils/airtable';

export default async (req, res) => {
    const { name, question, answer } = req.body;
    try {
        console.log('asdf')
        const newRecords = await table.create([{ fields: { name, question, answer } }]);
        console.log('asdf')
        res.status(200).json(getMinifiedRecord(newRecords[0])['id']);
        console.log('asdf')
    } catch {
        res.status(500).json({msg: 'rip something went wrong'});
    }
}