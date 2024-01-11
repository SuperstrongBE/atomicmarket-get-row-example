import { Name, Contract, TableStore } from "proton-tsc"
import { ATOMICASSETS_CONTRACT, Assets } from 'proton-tsc/atomicassets'

// import { ATOMICMARKET_CONTRACT } from "external/atomicmarket/atomicmarket.constants.ts"
// import { Auctions } from "external/atomicmarket/atomicmarket.tables.ts"

@contract
class GetTableRowExample extends Contract {

    @action("gettablerow")
    gettablerow(): void {
        const testaccount = Name.fromString('someaccount')

        const assetId: u64 = 1
        const asset = new TableStore<Assets>(ATOMICASSETS_CONTRACT, testaccount).requireGet(assetId, 'asset not found')

        // const auctionId: u64 = 1
        // const auction = new TableStore<Auctions>(ATOMICMARKET_CONTRACT).requireGet(auctionId, 'auction not found')
    }
}