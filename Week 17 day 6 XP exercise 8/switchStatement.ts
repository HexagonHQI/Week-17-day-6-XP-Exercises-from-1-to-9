function getAction(role: string): string {
    let action: string;

    switch (role) {
        case 'admin':
            action = 'Manage users and settings';
            break;
        case 'editor':
            action = 'Edit content';
            break;
        case 'viewer':
            action = 'View content';
            break;
        case 'guest':
            action = 'Limited access';
            break;
        default:
            action = 'Invalid role';
            break;
    }

    return action;
}


console.log(getAction('admin'));  // Output: Manage users and settings
console.log(getAction('editor')); // Output: Edit content
console.log(getAction('viewer')); // Output: View content
console.log(getAction('guest'));  // Output: Limited access
console.log(getAction('unknown')); // Output: Invalid role
