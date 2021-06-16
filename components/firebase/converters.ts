// Firestore data converter
import TestItem from "../../model/World";

export const testItemConverter = {
    toFirestore: function(testItem: TestItem) {
        return {
            name: testItem.name
        };
    },
    fromFirestore: (snapshot: any, options: any): TestItem => {
        const data = snapshot.data(options);
        return { name: data.name };
    }
};