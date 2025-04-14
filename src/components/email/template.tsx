import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    company: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    company,
    message,
}) => (
    <div style={{
        backgroundColor: '#121212',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        color: '#ffffff',
    }}>
        <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            border: '1px solid rgba(107, 23, 237, 0.3)',
            borderRadius: '8px',
            overflow: 'hidden',
        }}>
            {/* Header */}
            <div style={{
                backgroundColor: '#6B17ED',
                padding: '16px',
                textAlign: 'center' as const,
            }}>
                <h2 style={{
                    color: '#ffffff',
                    margin: '0',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase' as const,
                }}>
                    Client Contact Information
                </h2>
            </div>

            {/* Content */}
            <div style={{ padding: '24px' }}>
                {/* Client Information */}
                <div style={{
                    marginBottom: '24px',
                }}>
                    <h3 style={{
                        color: '#6B17ED',
                        fontSize: '16px',
                        marginTop: '0',
                        marginBottom: '16px',
                        textTransform: 'uppercase' as const,
                    }}>
                        Client Information
                    </h3>
                    
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse' as const,
                    }}>
                        <tbody>
                            <tr>
                                <td style={{
                                    padding: '8px 0',
                                    color: '#9ca3af',
                                    width: '100px',
                                }}>
                                    <strong>NAME:</strong>
                                </td>
                                <td style={{
                                    padding: '8px 0',
                                    color: '#ffffff',
                                }}>
                                    {name}
                                </td>
                            </tr>
                            <tr>
                                <td style={{
                                    padding: '8px 0',
                                    color: '#9ca3af',
                                }}>
                                    <strong>EMAIL:</strong>
                                </td>
                                <td style={{
                                    padding: '8px 0',
                                    color: '#ffffff',
                                }}>
                                    {email}
                                </td>
                            </tr>
                            <tr>
                                <td style={{
                                    padding: '8px 0',
                                    color: '#9ca3af',
                                }}>
                                    <strong>COMPANY:</strong>
                                </td>
                                <td style={{
                                    padding: '8px 0',
                                    color: '#ffffff',
                                }}>
                                    {company}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Message */}
                <div>
                    <h3 style={{
                        color: '#6B17ED',
                        fontSize: '16px',
                        marginTop: '0',
                        marginBottom: '16px',
                        textTransform: 'uppercase' as const,
                    }}>
                        Client Message
                    </h3>
                    
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        padding: '16px',
                        borderRadius: '4px',
                        color: '#e2e2e2',
                        lineHeight: '1.6',
                        whiteSpace: 'pre-wrap' as const,
                    }}>
                        {message}
                    </div>
                </div>
            </div>
        </div>
    </div>
);