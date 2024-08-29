/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

const addList = (list, value) => {
    if (list === null) {
        if (typeof value === "number") {
            return new ListNode(value);
        }

        return value;
    }
    
    list.next = addList(list.next, value);
    
    return list;
};


var mergeTwoLists = function(list1, list2) {
    if (list1 === null) {
        return list2;
    };
    
    if (list2 === null) {
        return list1;
    };
    
    let  mergedList = null;
    
    let listA = new ListNode(list1.val, list1.next);
    let listB = new ListNode(list2.val, list2.next);
    
    while (listA !== null && listB !== null) {
        if (listA && listB) {
            if (listA.val >= listB.val) {
                mergedList = addList(mergedList, listB.val);

                listB = listB.next;
            } else {
                mergedList = addList(mergedList, listA.val);
                
                listA = listA.next;
            }
        }
    };
    

    if (listA === null) {
        mergedList = addList(mergedList, listB);
    } else {
        mergedList = addList(mergedList, listA);
    }
    
    return mergedList;
};
